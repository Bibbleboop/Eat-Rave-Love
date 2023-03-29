import React from 'react';
import ReactFooter from './Components/footer/ReactFooter';
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
