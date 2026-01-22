const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/config');
const Amenity = require('./models/Amenity');
const authRoutes = require('./routes/auth');
const memberRoutes = require('./routes/members');
const bookingRoutes = require('./routes/bookings');
const { verifyToken } = require('./middleware/auth');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Society Management API - Server is running!',
    version: '1.0.0',
    database: 'MongoDB'
  });
});


app.use('/api/auth', authRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/bookings', bookingRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});