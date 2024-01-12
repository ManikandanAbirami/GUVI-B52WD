const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

// POST /appointments
router.post("/", async (req, res) => {
  const { patientId, providerId, date, time } = req.body;

  try {
    let appointment = new Appointment({
      patientId,
      providerId,
      date,
      time,
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server errror");
  }
});

// GET /appointements
router.get("/", async (req, res) => {
  try {
    const userId = req.user._id;
    const appointments = await Appointment.find({ patientId: userId });
    res.json(appointments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server errror");
  }
});

// GET /appointements/:id
router.get("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(400).json({ msg: "Appointment not found" });
    }
    res.json(appointment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server errror");
  }
});

// PUT /appointments/:id
router.put("/:id", async (req, res) => {
  const { date, time, status } = req.body;

  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(400).json({ msg: "Appointment not found" });
    }

    //Update the fields
    if (date) {
      appointment.date = date;
    }
    if (time) appointment.time = time;
    if (status) appointment.status = status;

    await appointment.save();
    res.json(appointment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server errror");
  }
});

// DELETE /appointments/:id
router.delete("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(400).json({ msg: "Appointment not found" });
    }

    await appointment.remove();
    res.json({ msg: "Appointment cancelled" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server errror");
  }
});

module.exports = router;
