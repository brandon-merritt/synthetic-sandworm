import React, { useState } from 'react';
import axios from 'axios';

function JournalEntry() {
  const [user, setUser] = useState('605c72ef7c5f1c001f6477d3'); // Example ObjectId
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddEntry = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending request with data:', { user, title, content });
      const response = await axios.post('/api/journal', {
        user,  // Ensure this is correctly defined
        title,
        content
      });
      console.log('Response received:', response.data);
      alert('Journal entry added successfully!');
    } catch (error) {
      console.error('Error adding journal entry:', error.response?.data || error.message);
      alert('Failed to add journal entry');
    }
  };

  return (
    <form onSubmit={handleAddEntry}>
      <div>
        <h2>Journal Entry</h2>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default JournalEntry;
