const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },  // "React", "Spring Boot"
  category: {
    type: String,
    enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'DSA', 'Tools']
  },
  stage: { type: mongoose.Schema.Types.ObjectId, ref: 'Stage' },
  depthCriteria: String,   // "custom hooks, lazy loading, protected routes"
  resources: [String],     // optional learning links
  order: Number
}, { timestamps: true });

module.exports = mongoose.model('Technology', technologySchema);