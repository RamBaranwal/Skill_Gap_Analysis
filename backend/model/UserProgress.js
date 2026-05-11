const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  technology: { type: mongoose.Schema.Types.ObjectId, ref: 'Technology', required: true },
  status: {
    type: String,
    enum: ['not started', 'learning', 'completed'],
    default: 'not started'
  },
  completedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

// Unique combination: one user can have only one status per technology
userProgressSchema.index({ user: 1, technology: 1 }, { unique: true });

module.exports = mongoose.model('UserProgress', userProgressSchema);
