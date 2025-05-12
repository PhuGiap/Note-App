import { useState } from 'react'
import './index.css'
import Header from './components/Header';
import SearchBar from './components/Search';
import Form from './components/Form';
import NoteList from './components/NoteList';
import NoteApp from './components/NoteApp';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SearchBar />
         <NoteApp/>
      </main>
    </div>
  );
}

export default App;

