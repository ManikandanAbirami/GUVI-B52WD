const express = require("express");
const app = express();

app.set("view engine", "ejs"); // This line will tell Express to use EJS as the templating engine
//app.set("views", path.join(__dirname, "ui"));
app.get("/", (req, res) => {
  res.render("index", { name: "Visitor" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server  is running on port ${PORT}.`));
