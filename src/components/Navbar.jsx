import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#education', text: 'Education' },
    { href: '#publications', text: 'Publications' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-primary"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Dr. Balamurugan K
          </div>

          {/* Desktop Navigation */}
          <div 
            className="hidden md:flex space-x-8"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-accent hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-accent hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
