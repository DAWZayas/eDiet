import React, { Component, PropTypes } from 'react';

export default class Collapsed extends Component {
  render() {
    return (
      <div className="navbar-header">
          <button type="button" onClick={this.props.onClick} className="navbar-toggle collapsed glyphicon glyphicon-menu-hamburger" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
          </button>
          <button type="button" onClick={this.props.xsLogin} className="navbar-toggle collapsed glyphicon glyphicon-user" data-toggle="collapse" data-target="#collapse-2" aria-expanded="false">
          </button>
          <a className="navbar-brand" href="#">Brand</a>
      </div>
    );
  }
}
