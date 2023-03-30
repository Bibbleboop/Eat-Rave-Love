import React from 'react';
import SearchBar from './Components/searchbar/searchbar';
import ReactFooter from './Components/footer/ReactFooter';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import ContactUs from './Components/contactus/ContactUs';

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
