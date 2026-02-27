const router = require("express").Router();
const Booking = require("../models/Booking");
const auth = require("../middleware/auth");

router.post("/book", auth, async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json("Booking Created");
});

router.get("/all", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

module.exports = router;