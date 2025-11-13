export default async function handler(req, res) {
  const { query } = req;
  const target = query.target || "";
  try {
    const response = await fetch(`https://dns.google/resolve?name=${target}&type=16`);
    const data = await response.json();
    const sni = data.Answer ? data.Answer.map(a => a.data).join(", ") : "No SNI found";
    res.json({ target, sni });
  } catch (err) {
    res.json({ error: "Failed to fetch SNI data" });
  }
}