import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prompt = () => {
  const [prompts, setPrompts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await axios.get('/api/prompts');
        setPrompts(response.data);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      }
    };

    fetchPrompts();
  }, []);

  const handleCreatePrompt = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/prompts', { title, content, tags });
      setPrompts([...prompts, response.data]);
      setTitle('');
      setContent('');
      setTags('');
    } catch (error) {
      console.error('Error creating prompt:', error);
    }
  };

  const handleUpdatePrompt = async (id) => {
    try {
      const response = await axios.put(`/api/prompts/${id}`, { title, content, tags });
      setPrompts(prompts.map(prompt => (prompt._id === id ? response.data : prompt)));
      setSelectedPrompt(null);
      setTitle('');
      setContent('');
      setTags('');
    } catch (error) {
      console.error('Error updating prompt:', error);
    }
  };

  const handleDeletePrompt = async (id) => {
    try {
      await axios.delete(`/api/prompts/${id}`);
      setPrompts(prompts.filter(prompt => prompt._id !== id));
    } catch (error) {
      console.error('Error deleting prompt:', error);
    }
  };

  return (
    <div>
      <h1>Prompts</h1>

      <form onSubmit={handleCreatePrompt}>
        <div>
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
        <div>
          <label>Tags:</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button type="submit">Create Prompt</button>
      </form>

      {selectedPrompt && (
        <div>
          <h2>Update Prompt</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdatePrompt(selectedPrompt._id);
          }}>
            <div>
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
            <div>
              <label>Tags:</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <button type="submit">Update Prompt</button>
          </form>
        </div>
      )}

      <ul>
        {prompts.map(prompt => (
          <li key={prompt._id}>
            <h2>{prompt.title}</h2>
            <p>{prompt.content}</p>
            <p><strong>Tags:</strong> {prompt.tags}</p>
            <button onClick={() => {
              setSelectedPrompt(prompt);
              setTitle(prompt.title);
              setContent(prompt.content);
              setTags(prompt.tags);
            }}>
              Edit
            </button>
            <button onClick={() => handleDeletePrompt(prompt._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prompt;
