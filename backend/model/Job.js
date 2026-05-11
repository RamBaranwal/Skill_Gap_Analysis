const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,                // "Java Full Stack Intern"
  level: {
    type: String,
    enum: ['Intern', 'Junior', 'SDE-1', 'Senior']
  },
  salaryRange: {
    min: Number,
    max: Number,
    currency: { type: String, default: 'INR' }
  },
  chancePercentage: Number,     // 75 means 75% chance
  requiredTechnologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technology' }],
  stageReached: { type: mongoose.Schema.Types.ObjectId, ref: 'Stage' }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);