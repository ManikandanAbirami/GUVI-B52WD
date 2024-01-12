const mongoose = require("mongoose");

//Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected...");
};

module.exports = connectDB;
