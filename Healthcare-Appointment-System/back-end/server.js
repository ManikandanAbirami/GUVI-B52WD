const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const userRoutes = require("./routes/userRoutes");
const medicalRecordRoutes = require("./routes/medicalRecordRoutes");

require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());

//CORS middleware
const cors = require("cors");
app.use(cors());
app.use("/auth", authRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/users", userRoutes);
app.use("/medicalRecords", medicalRecordRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
