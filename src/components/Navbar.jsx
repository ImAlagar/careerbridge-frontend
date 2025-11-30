// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import DesktopNavbar from './navbar/DesktopNavbar';
import MobileNavbar from './navbar/MobileNavbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const sections = ['home', 'about', 'services', 'countries', 'blogs', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveLink(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Countries', href: '#countries', id: 'countries' },
    { name: 'Blogs', href: '#blogs', id: 'blogs' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href, id) => {
    setActiveLink(id);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <DesktopNavbar 
        navItems={navItems}
        scrolled={scrolled}
        activeLink={activeLink}
        handleNavClick={handleNavClick}
      />

      {/* Mobile Navbar - Hidden on desktop */}
      <MobileNavbar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
        scrolled={scrolled}
        activeLink={activeLink}
        handleNavClick={handleNavClick}
      />
    </>
  );
};

export default Navbar;