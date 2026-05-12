const express = require('express');
const router = express.Router();
const { getHealthStatus } = require('../controller/healthController');

// Route: GET /health
router.get('/', getHealthStatus);

module.exports = router;
