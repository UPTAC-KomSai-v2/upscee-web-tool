const express = require('express');
const router = express.Router();
const EvaluationController = require('../controllers/EvaluationController');

router.post('/submit', EvaluationController.submitEvaluation);
router.get('/review', EvaluationController.reviewEvaluation);

module.exports = router;
