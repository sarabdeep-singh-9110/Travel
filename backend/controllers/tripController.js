const Trip = require('../models/Trip');

// @desc    Get all user trips
// @route   GET /api/trips
// @access  Private
const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find({ userId: req.user.id });
        res.json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new trip
// @route   POST /api/trips
// @access  Private
const createTrip = async (req, res) => {
    const { destination, startDate, endDate, totalBudget } = req.body;

    try {
        const trip = new Trip({
            userId: req.user.id,
            destination,
            startDate,
            endDate,
            totalBudget
        });

        const createdTrip = await trip.save();
        res.status(201).json(createdTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a trip
// @route   PUT /api/trips/:id
// @access  Private
const updateTrip = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        // Check if trip belongs to user
        if (trip.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a trip
// @route   DELETE /api/trips/:id
// @access  Private
const deleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        if (trip.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await trip.deleteOne();
        res.json({ message: 'Trip removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTrips,
    createTrip,
    updateTrip,
    deleteTrip
};
