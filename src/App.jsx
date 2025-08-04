import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';



const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App