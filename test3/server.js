// create server with 1 endpoint and send something back as a response

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/greet' && req.method === 'GET') {
    res.statusCode = 200; 
    res.end('Welcome to the server');
  } else {
    res.statusCode = 404; 
    res.end('Endpoint not found');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


