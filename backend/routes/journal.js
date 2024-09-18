const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

// Create a new journal entry
router.post('/', journalController.createEntry);

// Get all journal entries
router.get('/', journalController.getAllEntries);

// Get a single journal entry by ID
router.get('/:id', journalController.getEntryById);

// Update a journal entry by ID
router.put('/:id', journalController.updateEntryById);

// Delete a journal entry by ID
router.delete('/:id', journalController.deleteEntryById);

module.exports = router;
