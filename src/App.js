import React, { useState } from 'react';
import ReactFooter from './Components/footer/ReactFooter';
// import Header from './Components/header/Header';
// import Main from './Components/main/Main';
import SearchBar from './Components/searchbar/searchbar'
// import ContactUs from './Components/contactus/ContactUs';


function App() {
  const [setFilter] = useState('');

  const handleSearchInputChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div className="App">
      {/* <Header /> 
      <Main />   */}
      <h1 className="text-3xl text-center text-cyan-600 m-6">Search Events, Clubs, Raves & much more!</h1>
      <div>
        <input type="text" id="search-input" onChange={handleSearchInputChange}></input>
        <div className="container mx-auto my-4 flex flex-col">
          <SearchBar setFilter={setFilter} />
        </div>
      </div>
      {/* <ContactUs /> */}
      <ReactFooter />
    </div>
  );
}

export default App;