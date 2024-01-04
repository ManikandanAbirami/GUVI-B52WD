const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());

//CORS middleware
const cors = require("cors");
app.use(cors());
app.use("/auth", authRoutes);
app.use("/appointements", appointmentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  `Server running on port ${PORT}`;
});
