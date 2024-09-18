const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a Prompt
const promptSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  tags: {
    type: [String], // Array of strings for tags
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update `updatedAt` field before saving a document
promptSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the model
const Prompt = mongoose.model('Prompt', promptSchema);

module.exports = Prompt;
