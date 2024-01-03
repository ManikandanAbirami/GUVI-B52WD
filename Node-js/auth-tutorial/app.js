const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);

mongoose
  .connect("mongodb://localhost:27017/authTutorial", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

app.listen(process.env.PORT, () => console.log("Server started on PORT 3000."));
