const express = require('express');
const deriveRoutes = require('./routes/deriveRoute');
const cors = require('cors')
const app = express();
app.use(
    cors({
      origin: "http://localhost:5173", 
      methods: "GET, POST, OPTIONS",
      allowedHeaders: "Content-Type",
    }),
  );
  

// Middleware to parse JSON
app.use(express.json());

// Use the derive addresses routes
app.use('/api', deriveRoutes);

module.exports = app;
