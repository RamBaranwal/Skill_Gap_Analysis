/**
 * @desc    Check server health status
 * @route   GET /health
 * @access  Public
 */
const getHealthStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running healthy',
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHealthStatus
};
