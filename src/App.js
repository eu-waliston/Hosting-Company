import React from 'react';
import './App.css';


import Contact from './components/Contact/Contact';
import Features from './components/Features/Featurees';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Pricing from './components/Pricing/Pricing';
import Services from './components/Services/Srvices';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
