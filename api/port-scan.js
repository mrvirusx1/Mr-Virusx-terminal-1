import net from 'net';
export default async function handler(req, res) {
  const { host, ports } = req.query;
  const portList = ports ? ports.split(',') : ['80','443','22','21','8080'];
  let results = [];
  for (let port of portList) {
    await new Promise(resolve => {
      const socket = new net.Socket();
      socket.setTimeout(1500);
      socket.on('connect', () => {
        results.push({ port, open: true });
        socket.destroy();
        resolve();
      });
      socket.on('timeout', () => {
        results.push({ port, open: false });
        socket.destroy();
        resolve();
      });
      socket.on('error', () => {
        results.push({ port, open: false });
        resolve();
      });
      socket.connect(port, host);
    });
  }
  res.json({ host, results });
}