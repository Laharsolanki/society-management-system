const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const makeAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const result = await User.updateOne(
      { email: 'lahar@test.com' },
      { $set: { role: 'admin' } }
    );

    console.log('✅ User updated to admin!', result);
    
    // Verify
    const user = await User.findOne({ email: 'lahar@test.com' });
    console.log('Updated user role:', user.role);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

makeAdmin();