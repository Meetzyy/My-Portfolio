const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  highlights: [String],
  link: { type: String },
  imageClass: { type: String },
  image: { type: String },
  liveLink: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);
