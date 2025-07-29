require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // running 5000 due to react server using 300

app.use(cors());
app.use(express.json());

// Route imports
const binRoutes = require('./routes/bins');
const routeRoutes = require('./routes/routes');
const alertRoutes = require('./routes/alerts');

// Registering routes for API endpoints for bins, routes, and alerts 
app.use('/api/bins', binRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/alerts', alertRoutes);


// Health check endpoint to test if the server is running
app.get('/api/health', (req, res) => res.json({ status: 'OK' }));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
