import React, { Component, PropTypes } from 'react';

import ButtonsCollapsed from './buttonsCollapsed';
import DropdownHamburger from './dropdownHamburger';
import Login from './login';
const styles = require('./style.scss');

const navBar = {
  backgroundColor: 'transparent',
  padding: '10px',
  background: 'rgb(232, 142, 58)',
  borderColor: 'transparent',
  margin: '0 0 0 0',
}

const NavBar = ({user, doLogOut, navToLogin, route}) => (
    <nav className={`navbar navbar-default navbar-highlight-aquamarine navbar-relative-top navbar-inverse ${styles.navBar}`} style={navBar}>
      <div className="container-fluid">
        <ButtonsCollapsed user={user}/>
        <div className="collapse navbar-collapse" id="collapse-1">
          <DropdownHamburger user={user} route={route} />
          <Login user={user} doLogOut={doLogOut} navToLogin={navToLogin} route={route} />
        </div>
      </div>
    </nav>
);

export default NavBar;
