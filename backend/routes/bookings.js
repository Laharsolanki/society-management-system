const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Amenity = require('../models/Amenity');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Test route to verify router is working
router.get('/test', verifyToken, (req, res) => {
  res.json({ message: 'Booking routes are working!', user: req.user });
});

module.exports = router;