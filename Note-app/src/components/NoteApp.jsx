import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import NoteList from './NoteList';
import Search from '../components/Search';

function NoteApp() {
  const [Notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  console.log("Notes state: ", Notes); // Log state of Notes every time it changes

  // Save data to local storage whenever Notes changes
  useEffect(() => {
    console.log("Saving notes to localStorage: ", Notes);
    localStorage.setItem('Notes', JSON.stringify(Notes));
  }, [Notes]);

  // Load data from local storage
  useEffect(() => {
    const storedNotes = localStorage.getItem('Notes');
    console.log("Loaded notes from localStorage: ", storedNotes);

    if (storedNotes) {
      try {
        const parsedNotes = JSON.parse(storedNotes);
        console.log("Parsed notes from localStorage: ", parsedNotes);
        if (Array.isArray(parsedNotes)) {
          setNotes(parsedNotes);
        } else {
          console.warn('Notes in local storage is not an array. Resetting ...');
          setNotes([]); // Fallback to empty array
        }
      } catch (error) {
        console.error('Failed to parse notes from localStorage:', error);
        setNotes([]); // Fallback to empty array
      }
    }
  }, []);

  // Add or update a note
  const addNote = (note) => {
    console.log("Adding/updating note: ", note);
    if (currentNote) {
      const updatedNotes = Notes.map(i => i.id === currentNote.id ? note : i);
      console.log("Updated notes after editing: ", updatedNotes);
      setNotes(updatedNotes);
      setCurrentNote(null);
    } else {
      const newNote = { id: Date.now(), ...note };
      console.log("Adding new note: ", newNote);
      setNotes([...Notes, newNote]);
    }
  };

  // Delete a note
  const deleteNote = (id) => {
    console.log("Deleting note with id: ", id);
    const updatedNotes = Notes.filter(i => i.id !== id);
    console.log("Updated notes after deletion: ", updatedNotes);
    setNotes(updatedNotes);
  };

  // Set the note to be edited
  const editNote = (note) => {
    console.log("Editing note: ", note);
    setCurrentNote(note);
  };

  return (
    <div className=' '>
      <Form addNote={addNote} currentNote={currentNote} />
      <NoteList notes={Notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default NoteApp;
