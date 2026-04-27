# Travel Budgeting Tool

A basic full-stack web application for planning trips and tracking expenses. Built for a school project using the MERN stack (without React for simplicity).

## Features
- **User Authentication**: Secure signup and login with JWT and bcrypt.
- **Trip Management**: Create, edit, and delete trips with destinations and budgets.
- **Expense Tracking**: Add expenses to specific trips, categorized by type.
- **Budget Dashboard**: Automatically calculates total spent and remaining budget.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: JSON Web Tokens (JWT), Password Hashing (bcryptjs)

## Setup Instructions

### 1. Prerequisites
- Node.js installed
- MongoDB installed and running locally (or use MongoDB Atlas)

### 2. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder (or use the existing one) and configure:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/travel-budget-tool
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Simply open `frontend/index.html` in your browser using a Live Server (e.g., VS Code Live Server extension).
2. Ensure the backend is running on `http://localhost:5000`.

## Folder Structure
```
├── backend/
│   ├── config/          # DB connection
│   ├── controllers/     # Route logic
│   ├── middleware/      # Auth protection
│   ├── models/          # DB Schemas
│   ├── routes/          # API endpoints
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
└── frontend/
    ├── css/             # Styles
    ├── js/              # Client-side scripts
    ├── index.html       # Landing page
    ├── dashboard.html   # Main app view
    └── ...              # Other pages
```

## License
MIT
