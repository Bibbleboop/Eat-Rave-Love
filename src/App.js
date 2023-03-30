import React, { useState } from 'react';
import ReactFooter from './Components/footer/ReactFooter';
import SearchBar from './Components/searchbar/searchbar'
import Navbar from './Components/landing/Navbar';
import Hero from './Components/landing/Hero';
import About from './Components/landing/About';
import SavedCards from "./Components/savedcards/SavedCards";


function App() {
  const [setFilter] = useState('');

  const handleSearchInputChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <div>
        <input
          type="text"
          id="search-input"
          onChange={handleSearchInputChange}
        ></input>
        <div className="container mx-auto my-4 flex flex-col">
          <SearchBar setFilter={setFilter} />
        </div>
      </div>

      <SavedCards />
      <ReactFooter />
    </div>
  );
}

export default App;
