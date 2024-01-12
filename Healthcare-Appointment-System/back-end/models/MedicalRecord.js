const mongoose = require("mongoose");

const MedicalRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  recordDetails: { type: String, required: true },
  date: { type: Date, required: true },
  doctorNotes: { type: String },
});

module.exports = mongoose.model("MedicalRecord", MedicalRecordSchema);
