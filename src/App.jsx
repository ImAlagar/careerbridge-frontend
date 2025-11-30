// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Countries from './pages/Countries';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Countries />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;