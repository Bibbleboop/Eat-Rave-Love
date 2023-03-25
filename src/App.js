import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ReactFooter from '../src/Components/footer/footer'

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-center text-cyan-600 m-6">Search Events, Clubs, Raves & much more!</h1>
      <div className="container mx-auto my-4">
        <SearchBar />
      </div>
    <ReactFooter />
    </div>
  );
}

export default App;
