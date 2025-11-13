export default async function handler(req, res) {
  const { domain } = req.query;
  try {
    const data = await fetch(`https://dns.google/resolve?name=${domain}&type=A`).then(r => r.json());
    res.json(data);
  } catch (err) {
    res.json({ error: "DNS lookup failed" });
  }
}