const express = require('express');
const deriveRoutes = require('./routes/deriveRoute');
const cors = require('cors')
const app = express();
require('dotenv').config()

const domain = process.env.DOMAIN_NAME
app.use(
    cors({
      origin: doamin, 
      methods: "GET, POST, OPTIONS",
      allowedHeaders: "Content-Type",
    }),
  );
  

// Middleware to parse JSON
app.use(express.json());

// Use the derive addresses routes
app.use('/api', deriveRoutes);

module.exports = app;
