import React from 'react';
import SearchBar from './Components/searchbar/searchbar';
import ReactFooter from './Components/footer/ReactFooter';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import ContactUs from './Components/contactus/ContactUs';
import Navbar from './Components/landing/Navbar';
import Hero from './Components/landing/Hero';
import About from './Components/landing/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <ContactUs />
      <ReactFooter />
    </div>
  );
}

export default App;
