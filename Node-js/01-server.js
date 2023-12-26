const http = require("http");

const port = 3000;

const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === "/") {
    return respondText(req, res);
  }
  if (req.url === "/json") {
    return respondJSON(req, res);
  }

  respondNotFound(req, res);
});

function respondText(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hi");
}

function respondJSON(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ text: "hi", numbers: [1, 2, 3] }));
}

function respondNotFound(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Not Found");
}

server.listen(port);

console.log(`Server listening on port ${port}`);
