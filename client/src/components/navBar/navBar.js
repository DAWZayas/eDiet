import React, { Component, PropTypes } from 'react';
import Logged from './logged';
import Hamburguer from './hamburguer';
import Log from './log';

const styles = require('./style.scss');

const navBar = {
  backgroundColor: 'transparent',
  padding: '10px',
  background: 'rgb(232, 142, 58)',
  borderColor: 'transparent',
  margin: '0 0 0 0',
};

const NavBar = ({user, doLogOut, navToLogin, route}) => (
    <nav className={`navbar navbar-default navbar-highlight-aquamarine navbar-relative-top navbar-inverse ${styles.navBar}`} style={navBar}>
      <div className="container-fluid">
        <Logged user={user}/>
        <div className="collapse navbar-collapse" id="collapse-1">
          <Hamburguer user={user} route={route} />
          <Log user={user} doLogOut={doLogOut} navToLogin={navToLogin} route={route} />
        </div>
      </div>
    </nav>
);

export default NavBar;
