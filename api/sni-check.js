import tls from 'tls';
export default function handler(req, res) {
  const { host } = req.query;
  let online = false;
  const socket = tls.connect({ host, port: 443, servername: host }, () => {
    online = true;
    socket.end();
    res.json({ host, online });
  });
  socket.on('error', () => {
    res.json({ host, online: false });
  });
}