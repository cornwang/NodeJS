const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "text/plain"
  });
  res.end("hello");
});

server.listen(3000);
