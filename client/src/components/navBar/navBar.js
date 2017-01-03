import React, { Component, PropTypes } from 'react';

import ButtonsCollapsed from './buttonsCollapsed';
import DropdownLoginXs from './dropdownLoginXs';
import DropdownHamburger from './dropdownHamburger';
import DropdownLargeLogin from './dropdownLargeLogin';
import Administration from './administration';
import ExerciseAdministration from './exerciseAdministration';

const NavBar = ({user, doLogOut}) => (
    <nav className="navbar  navbar-default ">
      <div className="container-fluid">
        <ButtonsCollapsed user={user}/>
        <div className="collapse navbar-collapse" id="collapse-1">
          <DropdownHamburger  />
          <DropdownLargeLogin user={user} doLogOut={doLogOut}/>
          <Administration user={user}/>
          <ExerciseAdministration user={user} />
        </div>
        <div className="collapse navbar-collapse navbar-right" id="collapse-2">
          <DropdownLoginXs user={user} doLogOut={doLogOut}/>
        </div>
      </div>
    </nav>
);

export default NavBar;
