const express = require('express');
const router = express.Router();
const LocationsController = require('../controller/LocationController');
const controller = new LocationsController()

/* GET Locations in FindUs. */
router.get('/', controller.getAllLocations);

/* GET/POST Locations in AdminPanel. */
// router.get("/", controller.getAdmin);
// router.post("/admin", controller.createLocation);

module.exports = router;
