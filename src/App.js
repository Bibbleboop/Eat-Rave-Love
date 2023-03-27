import React from 'react';
import SearchBar from './components/searchbar/searchbar';
import ReactFooter from './components/footer/ReactFooter';
import Header from './components/header/Header';
import Main from './components/main/Main.js';
import ContactUs from './components/contactus/ContactUs';

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
