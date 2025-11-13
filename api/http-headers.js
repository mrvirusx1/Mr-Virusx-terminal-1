export default async function handler(req, res) {
  const { url } = req.query;
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const headers = {};
    response.headers.forEach((v, k) => headers[k] = v);
    res.json({ url, headers });
  } catch (err) {
    res.json({ error: "Header grab failed" });
  }
}