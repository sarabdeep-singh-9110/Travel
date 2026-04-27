const express = require('express');
const router = express.Router();
const { getTrips, createTrip, updateTrip, deleteTrip } = require('../controllers/tripController');
const { protect } = require('../middleware/auth');

router.use(protect); // Protect all routes

router.route('/')
    .get(getTrips)
    .post(createTrip);

router.route('/:id')
    .put(updateTrip)
    .delete(deleteTrip);

module.exports = router;
