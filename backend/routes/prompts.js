const express = require('express');
const router = express.Router();
const promptController = require('../controllers/promptController'); // Import the controller

router.get('/', promptController.getAllPrompts);
router.get('/:id', promptController.getPromptById);
router.post('/', promptController.createPrompt);
router.put('/:id', promptController.updatePrompt);
router.delete('/:id', promptController.deletePrompt);

module.exports = router;
