import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import Main from './Main'
import Solar from './Solar'


function App() {
  return ( 
    <div>
      <Routes>
      <Route  path="/" element={<Main/>} />
      <Route  path="/solar" element={<Solar/>} />
      </Routes>
    </div>
  );
}

export default App;
