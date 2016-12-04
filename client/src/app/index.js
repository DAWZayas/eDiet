// npm packages
import React from 'react';

import Aside from '../components/aside';

export default ({children}) => (
  <div className="container">
    {children}
    <Aside />
  </div>
);
