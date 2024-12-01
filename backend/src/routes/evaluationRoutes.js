const express = require('express');
const router = express.Router();
const { submitEvaluation, getEvaluation } = require('../controllers/evaluationController');

router.post('/student', submitEvaluation);
router.get('/student', getEvaluation);

module.exports = router;
