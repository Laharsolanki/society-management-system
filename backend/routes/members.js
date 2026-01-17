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

// Update own profile
router.put('/profile', verifyToken, async (req, res) => {
  try {
    const { name, phone } = req.body;

    // Validate input
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, phone },
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      message: 'Profile updated successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Server error while updating profile' });
  }
});

// Add family member
router.post('/family', verifyToken, async (req, res) => {
  try {
    const { name, age, relation } = req.body;

    // Validate input
    if (!name || !relation) {
      return res.status(400).json({ error: 'Name and relation are required' });
    }

    // Create new family member
    const familyMember = new FamilyMember({
      user_id: req.user.id,
      name,
      age,
      relation
    });

    await familyMember.save();

    res.status(201).json({
      message: 'Family member added successfully',
      family_member: familyMember
    });
  } catch (error) {
    console.error('Add family member error:', error);
    res.status(500).json({ error: 'Server error while adding family member' });
  }
});

// Get all family members for logged-in user
router.get('/family', verifyToken, async (req, res) => {
  try {
    const familyMembers = await FamilyMember.find({ user_id: req.user.id }).sort({ createdAt: -1 });

    res.json({
      count: familyMembers.length,
      family_members: familyMembers
    });
  } catch (error) {
    console.error('Get family members error:', error);
    res.status(500).json({ error: 'Server error while fetching family members' });
  }
});

// Delete family member
router.delete('/family/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete family member (only if it belongs to the user)
    const familyMember = await FamilyMember.findOneAndDelete({
      _id: id,
      user_id: req.user.id
    });

    if (!familyMember) {
      return res.status(404).json({ error: 'Family member not found or unauthorized' });
    }

    res.json({
      message: 'Family member deleted successfully',
      deleted: familyMember
    });
  } catch (error) {
    console.error('Delete family member error:', error);
    res.status(500).json({ error: 'Server error while deleting family member' });
  }
});

module.exports = router;