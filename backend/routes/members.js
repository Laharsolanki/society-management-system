const express = require('express');
const router = express.Router();
const User = require('../models/User');
const FamilyMember = require('../models/FamilyMember');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Test route to verify router is working
router.get('/test', verifyToken, (req, res) => {
  res.json({ message: 'Member routes are working!', user: req.user });
});

module.exports = router;