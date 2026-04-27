const Expense = require('../models/Expense');

// @desc    Get all expenses for a specific trip
// @route   GET /api/expenses/:tripId
// @access  Private
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ 
            userId: req.user.id,
            tripId: req.params.tripId
        });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new expense
// @route   POST /api/expenses
// @access  Private
const createExpense = async (req, res) => {
    const { tripId, category, amount, date, notes } = req.body;

    try {
        const expense = new Expense({
            userId: req.user.id,
            tripId,
            category,
            amount,
            date,
            notes
        });

        const createdExpense = await expense.save();
        res.status(201).json(createdExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update an expense
// @route   PUT /api/expenses/:id
// @access  Private
const updateExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        if (expense.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedExpense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete an expense
// @route   DELETE /api/expenses/:id
// @access  Private
const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        if (expense.userId.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await expense.deleteOne();
        res.json({ message: 'Expense removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense
};
