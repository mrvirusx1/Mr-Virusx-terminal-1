export default async function handler(req, res) {
  const { ip } = req.query;
  try {
    const data = await fetch(`https://api.hackertarget.com/reverseiplookup/?q=${ip}`).then(r => r.text());
    res.json({ ip, domains: data.split("\n") });
  } catch (err) {
    res.json({ error: "Reverse IP failed" });
  }
}