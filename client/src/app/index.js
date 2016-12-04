// npm packages
import React from 'react';

import Aside from '../components/aside';
import Footer from '../components/footer';

export default ({children}) => (
  <div className="container">
    {children}
    <Aside />
    <Footer />
  </div>
);
