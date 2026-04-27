const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tripId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        required: true
    },
    category: {
        type: String,
        required: [true, 'Please add a category'],
        enum: ['Transport', 'Hotel', 'Food', 'Shopping', 'Miscellaneous']
    },
    amount: {
        type: Number,
        required: [true, 'Please add an amount']
    },
    date: {
        type: Date,
        required: [true, 'Please add a date']
    },
    notes: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Expense', expenseSchema);
