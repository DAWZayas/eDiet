// npm packages
import React from 'react';
import Nav from '../components/navBar'
export default ({children}) => (

  <div className="container">
  <Nav />
    {children}
  </div>
);
