const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the bug lies.  If an error occurs during processing,
  // the 'res' object is never properly ended, which can cause issues
  // especially in long-running requests or when combined with other middleware.
  if (req.url === '/error') {
    throw new Error('Intentional server error');
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});