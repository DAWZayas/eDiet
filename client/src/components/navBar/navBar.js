import React, { Component, PropTypes } from 'react';

import ButtonsCollapsed from './buttonsCollapsed';
import DropdownLoginXs from './dropdownLoginXs';
import DropdownHamburger from './dropdownHamburger';
import DropdownLargeLogin from './dropdownLargeLogin';

const navbar = {
  backgroundColor: 'transparent',
  padding: '10px',
  background: 'rgba(0, 0, 0, 0.7)',
  zIndex: '9999',
  borderColor: 'transparent',
}

const NavBar = ({user, doLogOut, navToLogin,route}) => (
    <nav className="navbar navbar-default navbar-highlight-aquamarine navbar-relative-top navbar-inverse" style={navbar}>
      <div className="container-fluid">
        <ButtonsCollapsed user={user}/>
        <div className="collapse navbar-collapse" id="collapse-1">
          <DropdownHamburger user={user} route={route} />          
          <DropdownLargeLogin user={user} doLogOut={doLogOut} navToLogin={navToLogin} route={route} />
        </div>
      </div>
    </nav>
);

export default NavBar;
