const JournalEntry = require('../models/JournalEntry');

// Create a new journal entry
exports.createEntry = async (req, res) => {
  try {
    const newEntry = new JournalEntry(req.body);
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({ message: 'Error creating journal entry', error });
  }
};

// Get all journal entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching journal entries', error });
  }
};

// Get a single journal entry by ID
exports.getEntryById = async (req, res) => {
  try {
    const entry = await JournalEntry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching journal entry', error });
  }
};

// Update a journal entry by ID
exports.updateEntryById = async (req, res) => {
  try {
    const updatedEntry = await JournalEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEntry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: 'Error updating journal entry', error });
  }
};

// Delete a journal entry by ID
exports.deleteEntryById = async (req, res) => {
  try {
    const deletedEntry = await JournalEntry.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }
    res.status(200).json({ message: 'Journal entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting journal entry', error });
  }
};
