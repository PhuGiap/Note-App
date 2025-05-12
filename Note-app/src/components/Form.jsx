import React, { useState, useEffect } from 'react';

const Form = ({ addNote, currentNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      const newNote = {
        id: currentNote?.id || Date.now().toString(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date().toISOString(),
      };
      addNote(newNote);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Create a new note</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            type="button"
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
