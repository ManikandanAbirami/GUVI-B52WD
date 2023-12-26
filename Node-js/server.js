const http = require("http"); // This load the core http module and stores it in our http variable.
// require() is a globally accessible function in Node.js and is always available.
// http is a core module, which means that is always available to be loaded via require().

const port = 3000; // We choose which port our web server should listen to for requests.

const server = http.createServer(function (req, res) {
  //We use http.createServer() to create a HTTP server obj and assign it to the server variable.
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ text: "hi", numbers: [1, 2, 3] }));
});

server.listen(port);

console.log(`Server listening on port ${port}`);
