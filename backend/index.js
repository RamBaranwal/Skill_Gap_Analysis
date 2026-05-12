require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbconnect');
const healthRoute = require('./router/healthRoute');

// Initialize Express App
const app = express();

// Connect to Database
connectDB();

// Middleware to parse JSON
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Mount Routes
app.use('/health', healthRoute);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the HowToStudy API');
});

// Error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
