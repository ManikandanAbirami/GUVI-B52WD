// require("http")
//   .createServer((req, res) => {
//     res.end("hello world - B52 WD Tamil");
//   })
//   .listen(3000);

// console.log(`Server listening on port 3000.`);

const express = require("express");
const app = express();
app.listen(3000, () => console.log(`Server listening on port 3000`));
