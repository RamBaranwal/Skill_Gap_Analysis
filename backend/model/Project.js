const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  description: String,
  requiredTechnologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technology' }],
  isTutorialBased: { type: Boolean, default: false },  // false = you can build without tutorial
  liveDemoUrl: String,
  githubTemplate: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);