const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlMedalist = require('../controllers/ctrlMedalist'); // ... for the list of Winter Olympic Games winners (countries)
const ctrlWinterolympics = require('../controllers/ctrlWinterolympics'); // ... for the the list of best scorers (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/Medalist', ctrlMedalist.winnerlist);  // List of Winter Olympic Games winners (countries)
router.get('/Winterolympics', ctrlWinterolympics.winnerlist);  // List of the best scorers (players)

module.exports = router;
