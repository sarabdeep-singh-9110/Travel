const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/trips', require('./routes/trips'));
app.use('/api/expenses', require('./routes/expenses'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
