const express = require('express');
const router = express.Router();
const LocationsController = require('../controller/LocationController');
const controller = new LocationsController()

/* GET/POST Locations in AdminPanel. */
router.get("/", controller.getAdmin);
router.post("/", controller.createLocation);

module.exports = router;
