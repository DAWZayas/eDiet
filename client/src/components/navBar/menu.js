import React, { Component, PropTypes } from 'react';

import ButtonsCollapsed from './buttonsCollapsed';
import DropdownLoginXs from './dropdownLoginXs';
import DropdownHamburger from './dropdownHamburger';
import DropdownLargeLogin from './dropdownLargeLogin';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" >
      <div className="container-fluid">
        <ButtonsCollapsed onClick={this.props.onClick} xsLogin={this.props.xsLogin}/>
        <div className="collapse navbar-collapse" id="collapse-1">
          <DropdownHamburger />
          <DropdownLargeLogin largeLogin={this.props.largeLogin}/>
        </div>
        <div className="collapse navbar-collapse navbar-right" id="collapse-2">
          <DropdownLoginXs />
        </div>
      </div>
    </nav>
    );
  }
}
