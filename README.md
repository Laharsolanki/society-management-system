# 🏘️ Society Management System

A comprehensive full-stack web application designed to streamline residential society operations, including member management, amenity bookings, expense tracking, and more.

## 🌟 Features

### Completed ✅
- **Project Setup** - Node.js backend with Express framework
- **Database** - MongoDB with Mongoose ODM
- **Data Models** - User, Booking, Expense, Amenity, and Family Member schemas
- **Sample Data** - Pre-seeded amenities (Clubhouse, Garden, Swimming Pool, Community Hall)
- **User Authentication** - Register, Login with JWT tokens
- **Protected Routes** - JWT verification for secure endpoints
- **Authentication Middleware** - JWT verification for protected routes

### In Progress 🔨
- Member Management APIs
- Booking System APIs
- Expense Tracking APIs

### Planned 📋
- React Frontend with Tailwind CSS
- Admin Dashboard
- Booking Calendar Interface
- Expense Analytics with Charts
- ML-powered Expense Prediction
- Production Deployment

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt

**Frontend (Planned):**
- React.js
- Tailwind CSS
- React Router
- Recharts

**ML Features (Planned):**
- Python
- Flask
- scikit-learn

## 📁 Project Structure

```
society-management-system/
├── backend/
│   ├── db/
│   │   └── config.js          # MongoDB connection
│   ├── models/
│   │   ├── User.js            # User schema
│   │   ├── Booking.js         # Booking schema
│   │   ├── Expense.js         # Expense schema
│   │   ├── Amenity.js         # Amenity schema
│   │   └── FamilyMember.js    # Family member schema
│   ├── routes/               # API routes (coming soon)
│   ├── middleware/           # Auth middleware (coming soon)
│   ├── server.js             # Main server file
│   ├── seedData.js           # Database seeding script
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Laharsolanki/society-management-system.git
   cd society-management-system
   ```

2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Setup environment variables**
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Edit .env with your MongoDB URI
   ```

4. **Start MongoDB**
   ```bash
   # Windows (as Administrator)
   net start MongoDB
   
   # Mac
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongodb
   ```

5. **Seed the database**
   ```bash
   node seedData.js
   ```

6. **Start the server**
   ```bash
   node server.js
   ```

7. **Test the API**
   - Open browser: http://localhost:5000
   - Check amenities: http://localhost:5000/amenities

## 🔧 Available Scripts

```bash
# Start development server
node server.js

# Seed database with sample data
node seedData.js
```

## 📝 API Endpoints

### Current Endpoints
- `GET /` - Health check
- `GET /amenities` - Get all amenities

### Upcoming Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/members/profile` - Get user profile
- `POST /api/bookings` - Create booking
- `GET /api/expenses` - Get all expenses
- And more...

## 🎯 Use Cases

This application is designed for:
- **Residents** - Book amenities, view expenses, manage family details
- **Society Admins** - Manage members, approve bookings, track expenses
- **Committee Members** - View reports, analyze spending patterns

## 📊 Database Schema

### Collections
1. **users** - Member information and authentication
2. **family_members** - Family member details
3. **amenities** - Society facilities available for booking
4. **bookings** - Amenity reservation records
5. **expenses** - Society expense tracking

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

## 👨‍💻 Author

**Lahar Solanki**
- GitHub: [@Laharsolanki](https://github.com/Laharsolanki)


## 🙏 Acknowledgments

- Built as a portfolio project to demonstrate full-stack development skills
- Inspired by real-world society management needs

---

**Status:** 🚧 Active Development  
**Last Updated:** January 10, 2026