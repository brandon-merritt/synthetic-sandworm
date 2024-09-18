const Prompt = require('../models/Prompt');

// Get all prompts
const getAllPrompts = async (req, res) => {
  try {
    const prompts = await Prompt.find();
    res.status(200).json(prompts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prompts', error: error.message });
  }
};

// Get a single prompt by ID
const getPromptById = async (req, res) => {
  try {
    const prompt = await Prompt.findById(req.params.id);
    if (!prompt) {
      return res.status(404).json({ message: 'Prompt not found' });
    }
    res.status(200).json(prompt);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prompt', error: error.message });
  }
};

// Create a new prompt
const createPrompt = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const newPrompt = new Prompt({ title, content, tags });
    await newPrompt.save();
    res.status(201).json(newPrompt);
  } catch (error) {
    res.status(400).json({ message: 'Error creating prompt', error: error.message });
  }
};

// Update a prompt by ID
const updatePrompt = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const updatedPrompt = await Prompt.findByIdAndUpdate(
      req.params.id,
      { title, content, tags },
      { new: true, runValidators: true }
    );
    if (!updatedPrompt) {
      return res.status(404).json({ message: 'Prompt not found' });
    }
    res.status(200).json(updatedPrompt);
  } catch (error) {
    res.status(400).json({ message: 'Error updating prompt', error: error.message });
  }
};

// Delete a prompt by ID
const deletePrompt = async (req, res) => {
  try {
    const deletedPrompt = await Prompt.findByIdAndDelete(req.params.id);
    if (!deletedPrompt) {
      return res.status(404).json({ message: 'Prompt not found' });
    }
    res.status(200).json({ message: 'Prompt deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting prompt', error: error.message });
  }
};

module.exports = {
  getAllPrompts,
  getPromptById,
  createPrompt,
  updatePrompt,
  deletePrompt
};
