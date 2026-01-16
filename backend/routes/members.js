const express = require('express');
const router = express.Router();
const User = require('../models/User');
const FamilyMember = require('../models/FamilyMember');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Get all members (Admin only)
router.get('/', verifyToken, isAdmin, async (req, res) => {
  try {
    // Get all users, exclude password field
    const members = await User.find().select('-password').sort({ house_number: 1 });
    
    res.json({
      count: members.length,
      members
    });
  } catch (error) {
    console.error('Get members error:', error);
    res.status(500).json({ error: 'Server error while fetching members' });
  }
});

module.exports = router;