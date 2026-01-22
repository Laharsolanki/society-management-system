const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Amenity = require('../models/Amenity');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Get all amenities
router.get('/amenities', verifyToken, async (req, res) => {
  try {
    const amenities = await Amenity.find().sort({ name: 1 });
    
    res.json({
      count: amenities.length,
      amenities
    });
  } catch (error) {
    console.error('Get amenities error:', error);
    res.status(500).json({ error: 'Server error while fetching amenities' });
  }
});

module.exports = router;