import React from 'react';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <header className='header'>Search For Events, Clubs, Raves & much more!</header>
      <div className="container mx-auto my-4">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
