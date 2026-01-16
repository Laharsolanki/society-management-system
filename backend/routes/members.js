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

// Get own profile with family members
router.get('/profile', verifyToken, async (req, res) => {
  try {
    // Get user info (without password)
    const user = await User.findById(req.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get family members for this user
    const familyMembers = await FamilyMember.find({ user_id: req.user.id });

    res.json({
      user,
      family_members: familyMembers
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Server error while fetching profile' });
  }
});

module.exports = router;