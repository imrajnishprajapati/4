import React  from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Componants from './components/Componants';
import Gallery from './components/Gallery';

const  App = () => {
  return (
    <>

  <Routes>
    <Route exact path="/" element={ <Home/> } /> 
    <Route exact path="/about" element={ <About/> } /> 
    <Route exact path="/componants" element={ <Componants/> } /> 
    <Route exact path="/gallery" element={ <Gallery/> } /> 
  </Routes>
 

    </>
    );
}

export default App;
