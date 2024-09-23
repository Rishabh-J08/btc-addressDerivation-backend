const express = require('express');
const deriveRoutes = require('./routes/deriveRoute');
const cors = require('cors')
const app = express();
require('dotenv').config()

app.use(
  cors({
    origin: "*", 
    methods: "GET, POST, OPTIONS",
    allowedHeaders: "*",  // Allowing rhe all headers temporarily for testing
  })
);

  

// Middleware to parse JSON
app.use(express.json());

// Use the derive addresses routes
app.use('/api', deriveRoutes);

module.exports = app;
