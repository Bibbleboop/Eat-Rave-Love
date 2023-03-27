import React from 'react';
import SearchBar from './components/searchbar/searchbar.js';
import ReactFooter from './components/footer/footer';
import Header from './components/Header';
import Main from './components/Main';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Main />  
        <h1 className="text-3xl text-center text-cyan-600 m-6">Search Events, Clubs, Raves & much more!</h1>
        <div className="container mx-auto my-4">
          <SearchBar />
        </div>
      <ContactUs />
      <ReactFooter />
    </div>
  );
}

export default App;