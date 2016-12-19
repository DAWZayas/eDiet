import React, { Component, PropTypes } from 'react';

import ButtonsCollapsed from './buttonsCollapsed';
import DropdownLoginXs from './dropdownLoginXs';
import DropdownHamburger from './dropdownHamburger';
import DropdownLargeLogin from './dropdownLargeLogin';

const NavBar = ({user, doLogOut}) => (
    <nav className="navbar navbar-default" >
      <div className="container-fluid">
        <ButtonsCollapsed />
        <div className="collapse navbar-collapse" id="collapse-1">
          <DropdownHamburger />
          <DropdownLargeLogin  user={user} doLogOut={doLogOut}/>
        </div>
        <div className="collapse navbar-collapse navbar-right" id="collapse-2">
          <DropdownLoginXs user={user} doLogOut={doLogOut}/>
        </div>
      </div>
    </nav>
);

export default NavBar;
