const express = require('express');
const router = express.Router();
const { getExpenses, createExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.post('/', createExpense);
router.get('/:tripId', getExpenses);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;
