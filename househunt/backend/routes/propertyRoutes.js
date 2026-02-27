const express = require("express");
const Property = require("../models/Property");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// 🔐 Protected - Only logged-in users can add property
router.post("/", protect, async (req, res) => {
  const property = await Property.create({
    ...req.body,
    user: req.user._id
  });

  res.status(201).json(property);
});

// 🌍 Public - Anyone can view properties
router.get("/", async (req, res) => {
  const properties = await Property.find().populate("user", "name email");
  res.json(properties);
});

module.exports = router;