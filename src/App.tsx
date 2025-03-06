import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <NavBar />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
