const mongoose = require('mongoose');

const journalEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'  // Ensure 'User' model exists if you're using references
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);
module.exports = JournalEntry;
