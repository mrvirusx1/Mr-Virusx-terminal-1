export default async function handler(req, res) {
  const { ip } = req.query;
  try {
    const geo = await fetch(`https://ipapi.co/${ip}/json/`).then(r => r.json());
    res.json({ ip, geo });
  } catch (err) {
    res.json({ error: "Failed to track IP" });
  }
}