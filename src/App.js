import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'


function App() {
  const [page, setPage] = useState(0);
  return (
    
    <div>
      {/* if (page == 4){
        <div>
          <Navbar />
          <Hero />
          <About />
          <Testimonials />
          <Demo />
          <Footer />
        </div>
      } */}
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
