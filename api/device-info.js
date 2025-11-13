export default function handler(req, res) {
  const ua = req.headers['user-agent'] || 'Unknown';
  res.json({ userAgent: ua });
}