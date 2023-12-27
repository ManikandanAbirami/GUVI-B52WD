const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const booksRoute = require("./routes/books");

const app = express();

app.use(bodyParser.json()); //middleware

//Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/bookdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use("/api/books", booksRoute);
app.use(express.static("public"));

// Start the server
const port = 3000;
app.listen(port, () => console.log("Listening on port 3000 ..."));
