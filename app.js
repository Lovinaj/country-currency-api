const express = require('express');
const cors = require('cors');
// const { testConnection } = require('./database');
// const routes = require('./routes');
require('dotenv').config(); 

// Create the Express app (like building a house)
const app = express();
const PORT = process.env.PORT || 3000;


// MIDDLEWARE (Security guards and helpers)

// Enable CORS - Allows other websites to use your API
app.use(cors());

// Parse JSON data in request body
app.use(express.json());

// Parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Log all incoming requests (helpful for debugging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});


// ROUTES - All  API endpoints


// Use all routes from routes.js
// app.use('/', routes);


// 404 handler - When someone tries to access a route that doesn't exist
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    message: 'Please check the API documentation for valid endpoints',
    available_endpoints: {
      refresh: 'POST /countries/refresh',
      all_countries: 'GET /countries',
      single_country: 'GET /countries/:name',
      delete_country: 'DELETE /countries/:name',
      status: 'GET /status',
      image: 'GET /countries/image'
    }
  });
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})