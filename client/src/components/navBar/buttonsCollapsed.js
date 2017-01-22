import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
const styles = require('./style.scss');

export default class Collapsed extends Component {
  render() {
    return (
      <div className={`navbar-header ${styles.logged}`}>
          <button type="button" className="navbar-toggle collapsed glyphicon glyphicon-menu-hamburger" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
          </button>
          {this.props.user ? <Link to='/user' className=" navbar-brand"> Logged as {this.props.user.login} </Link> :null}
      </div>
    );
  }
}
