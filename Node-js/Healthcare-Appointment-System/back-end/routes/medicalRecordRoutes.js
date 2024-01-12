const express = require("express");
const MedicalRecord = require("../models/MedicalRecord");
const router = express.Router();

// POST /medicalRecords
router.post("/", async (req, res) => {
  const { userId, recordDetails, date, doctorNotes } = req.body;

  try {
    let medicalRecord = new MedicalRecord({
      userId,
      recordDetails,
      date,
      doctorNotes,
    });

    await medicalRecord.save();
    res.status(201).json({ msg: "Medical record added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// GET /medicalRecords/:userId
router.get("/:userId", async (req, res) => {
  try {
    const medicalRecords = await MedicalRecord.find({
      userId: req.params.userId,
    });
    res.json(medicalRecords);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// PUT /medicalRecords/:id
router.put("/:id", async (req, res) => {
  const { recordDetails, date, doctorNotes } = req.body;
  try {
    const medicalRecord = await MedicalRecord.findById(req.params.id);
    if (!medicalRecord) {
      return res.status(404).json({ msg: "Medical record not found" });
    }

    //Update fields
    if (recordDetails) medicalRecord.recordDetails = recordDetails;
    if (date) medicalRecord.date = date;
    if (doctorNotes) medicalRecord.doctorNotes = doctorNotes;

    await medicalRecord.save();
    res.json({ MSG: "MEDICAL RECORD UPDATED SUCCESSFULLY", medicalRecord });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
