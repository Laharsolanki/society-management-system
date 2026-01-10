const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Amenity = require('./models/Amenity');

dotenv.config();

const amenities = [
  {
    name: 'Clubhouse',
    description: 'Main clubhouse for events and parties',
    capacity: 100,
    booking_price: 5000,
  },
  {
    name: 'Garden',
    description: 'Community garden area',
    capacity: 50,
    booking_price: 2000,
  },
  {
    name: 'Swimming Pool',
    description: 'Community swimming pool',
    capacity: 30,
    booking_price: 1000,
  },
  {
    name: 'Community Hall',
    description: 'Indoor hall for meetings',
    capacity: 75,
    booking_price: 3000,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing amenities
    await Amenity.deleteMany({});
    console.log('🗑️  Cleared old amenities');

    // Insert new amenities
    await Amenity.insertMany(amenities);
    console.log('✅ Sample amenities added successfully!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedDatabase();