// pages/MainPage.jsx
import React from 'react';
import About from './About';
import Services from './Services';
import Countries from './Countries';
import Blogs from './Blogs';
import Contact from './Contact';
import Home from './Home';

const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Countries />
      <Blogs />
      <Contact />
    </>
  );
};

export default MainPage;