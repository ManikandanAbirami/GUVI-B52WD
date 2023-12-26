const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.end("Hi from 03 - server");
});
const port = 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));
