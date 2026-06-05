const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projectRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const path = require('path');

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', messageRoutes);

// Serve frontend static files in production
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Fallback to index.html for React Router
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
