import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class dropdownLoginXs extends Component {

  render() {

    const handleLogin = (e) => {
      e.preventDefault();
      this.props.doLogOut();
      this.props.navToLogin();
    };

    const login = [
      {
        class: "glyphicon glyphicon-log-in",
        body: "Sign in",
        url: "/login",
      },
      {
        class: "glyphicon glyphicon-pencil",
        body: "Sign up",
        url:'/register',
      }

    ];

    const logout = [
      {
        class: "glyphicon	glyphicon-off",
        body: "Logout",
      },
      {
        class: "glyphicon glyphicon-pencil",
        body: "My area",

      }
    ];

      const log = logout.map((obj, index) => <li key={index}><a className={obj.class} onClick={handleLogin} > {obj.body} </a></li>);

      const li = login.map((obj, index) => <li key={index} style={{color:'white'}}><Link to={obj.url} className={obj.class} > {obj.body} </Link></li>);

    return (
        <ul className="nav navbar-nav hidden-sm hidden-md hidden-lg">
          { this.props.user ? log : li}
        </ul>

    );
  }
}
