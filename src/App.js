import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ReactFooter from '../src/Components/footer/footer'

function App() {
  return (
    <div className="App">
      <header className='header'>Search For Events, Clubs, Raves & much more!</header>
      <div className="container mx-auto my-4">
        <SearchBar />
      </div>
      <ReactFooter />
    </div>
  );
}

export default App;
