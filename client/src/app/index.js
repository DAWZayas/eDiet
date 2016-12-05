// npm packages
import React from 'react';
import Nav from '../components/navBar';
import Footer from '../components/Footer';

export default ({children}) => (

  <div className="container">
    <Nav />
    {children}
    <Footer />
  </div>
);
