import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <form className='note-form'>
        <input 
        type="text"
        placeholder='title'
        required />
        <textarea 
        placeholder='Input text here...'
        required
         rows={10}
         ></textarea>
         <button type='submit'>Save Document</button>
      </form>
      <div className='notes-grid'>
        <div className='note-item'>
          <div className='notes-header'>
            <button>Delete Document</button>
          </div>
          <h2>Document Title</h2>
          <p>Document content</p>
        </div>
      </div>
    </div>
  );
};

export default App;
