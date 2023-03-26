<<<<<<< HEAD
// eslint-disable-next-line
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Header /> 

    <Main />  

    <SearchBar /> 
      
      <SearchResults />
      <SearchResults />
      <SearchResults />

      <ContactUs />

      <Footer /> 

    </>
=======
import React from 'react';
import './App.css';
import SearchBar from './Components/searchbar/SearchBar';
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
>>>>>>> 6afe2aff9357c4fad43048c776a105539da91460
  );
}

export default App;
