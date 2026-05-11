const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  },
  description: String,
  skills: [
    {
      techName: String,          // e.g., "HTML"
      depthRequired: String,     // "semantic tags, forms, accessibility"
      isCore: { type: Boolean, default: true }
    }
  ],
  typicalJobs: [String],         // ["Frontend Intern", "Junior Developer"]
  order: { type: Number, unique: true }  // 1,2,3,4
}, { timestamps: true });

module.exports = mongoose.model('Stage', stageSchema);