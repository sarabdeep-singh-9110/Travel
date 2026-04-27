const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    destination: {
        type: String,
        required: [true, 'Please add a destination']
    },
    startDate: {
        type: Date,
        required: [true, 'Please add a start date']
    },
    endDate: {
        type: Date,
        required: [true, 'Please add an end date']
    },
    totalBudget: {
        type: Number,
        required: [true, 'Please add a total budget']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Trip', tripSchema);
