const express = require("express"); // Express is  replacement for the core http module ( Web Framework fro Node.js)
const app = express();
const queryString = require("querystring");

const port = 3000;

app.get("/", respondText);
app.get("/json", respondJSON);
app.get("/notFound", respondNotFound);
app.get("/echo", respondEcho);

function respondEcho(req, res) {
  console.log("Query String:", req.url);
  console.log("Split: ", req.url.split("?"));
  console.log("Slice: ", req.url.split("?").slice(1));
  console.log("Join: ", req.url.split("?").slice(1).join(""));
  console.log(
    "Query sting parse: ",
    queryString.parse(req.url.split("?").slice(1).join(""))
  );
  const { input = " " } = queryString.parse(
    req.url.split("?").slice(1).join("")
  );
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      normal: input,
      upperCase: input.toUpperCase(),
      count: input.length,
      reverse: input.split("").reverse().join(""),
    })
  );
}

function respondText(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hi");
}

function respondJSON(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ text: "hi", numbers: [1, 2, 3, 4] }));
}

function respondNotFound(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Not Found");
}

app.listen(port, () => console.log(`Server listening on port ${port}`));
