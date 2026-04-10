const MESSAGE_TYPES = {
  comment: 'Komentář nebo nápad',
  link: 'Doporučení odkazu/zdroje',
  help: 'Žádost o pomoc',
};

function getIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket?.remoteAddress || 'unknown';
}

function normalize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return res.status(500).json({
      error: 'Kontaktni formular neni na serveru kompletne nastaven.',
    });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const honeypot = normalize(body.company);

  // Silently accept bots that fill the hidden field.
  if (honeypot) {
    return res.status(200).json({ ok: true });
  }

  const name = normalize(body.name);
  const email = normalize(body.email);
  const type = normalize(body.type) || 'comment';
  const message = normalize(body.message);

  if (!email || !message) {
    return res.status(400).json({
      error: 'Email a zprava jsou povinne.',
    });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return res.status(400).json({
      error: 'Zadejte platnou emailovou adresu.',
    });
  }

  if (message.length < 10) {
    return res.status(400).json({
      error: 'Zprava je prilis kratka.',
    });
  }

  if (message.length > 5000) {
    return res.status(400).json({
      error: 'Zprava je prilis dlouha.',
    });
  }

  const readableType = MESSAGE_TYPES[type] || MESSAGE_TYPES.comment;
  const subject = `[AI pro rodinu] ${readableType}`;
  const ip = getIp(req);

  const text = [
    'Nova zprava z kontaktniho formulare AI pro rodinu',
    '',
    `Typ: ${readableType}`,
    `Jmeno: ${name || 'neuvedeno'}`,
    `Email odesilatele: ${email}`,
    `IP: ${ip}`,
    '',
    'Zprava:',
    message,
  ].join('\n');

  const htmlMessage = message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br />');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#2D3436;line-height:1.6">
      <h2 style="margin:0 0 16px">Nová zpráva z kontaktního formuláře</h2>
      <p><strong>Typ:</strong> ${readableType}</p>
      <p><strong>Jméno:</strong> ${name || 'neuvedeno'}</p>
      <p><strong>Email odesílatele:</strong> ${email}</p>
      <p><strong>IP:</strong> ${ip}</p>
      <hr style="border:none;border-top:1px solid #E8E4DE;margin:24px 0" />
      <p><strong>Zpráva:</strong></p>
      <p>${htmlMessage}</p>
    </div>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  const resendData = await resendResponse.json();

  if (!resendResponse.ok) {
    const isDomainSetupIssue =
      resendResponse.status === 403 ||
      String(resendData?.message || '').toLowerCase().includes('verify a domain');

    return res.status(isDomainSetupIssue ? 503 : 500).json({
      error: isDomainSetupIssue
        ? 'Odesilani jeste neni aktivni, protoze domena pro Resend zatim neni overena v DNS.'
        : 'Zpravu se nepodarilo odeslat. Zkuste to prosim znovu nebo napiste primo na info@aiprorodinu.cz.',
    });
  }

  return res.status(200).json({
    ok: true,
    id: resendData.id,
  });
}
