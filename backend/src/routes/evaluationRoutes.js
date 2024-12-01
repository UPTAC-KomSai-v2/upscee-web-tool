const express = require('express');
const router = express.Router();
const { submitEvaluation, getEvaluation, resetEvaluation } = require('../controllers/evaluationController');

router.post('/student', submitEvaluation);
router.get('/student', getEvaluation);
router.put('/student', resetEvaluation);

module.exports = router;
