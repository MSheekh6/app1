import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 py-4 px-6 md:px-16 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-500">CodeMastery</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-white hover:text-purple-400 transition">Features</a>
          <a href="#courses" className="text-white hover:text-purple-400 transition">Courses</a>
          <a href="#testimonials" className="text-white hover:text-purple-400 transition">Testimonials</a>
          <a href="#contact" className="text-white hover:text-purple-400 transition">Contact</a>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-gray-800 md:hidden shadow-lg">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#features" className="text-white hover:text-purple-400 transition" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#courses" className="text-white hover:text-purple-400 transition" onClick={() => setIsMenuOpen(false)}>Courses</a>
              <a href="#testimonials" className="text-white hover:text-purple-400 transition" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
