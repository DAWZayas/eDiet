import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class dropdownLargeLogin extends Component {

  render() {

    const handleLogin = (e) => {
      e.preventDefault();
      this.props.doLogOut();
      this.props.navToLogin();
    };

    const loginUser = [
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

    const logOutUser = [
      {
        class: "glyphicon	glyphicon-off",
        body: "Logout",
      },
      {
        class: "glyphicon glyphicon-pencil",
        body: "My area",        
      }
    ];

      const log = logOutUser.map((obj, index) => <li key={index}><a href="#" className={obj.class} onClick={handleLogin} > {obj.body} </a></li>);

      const li = loginUser.map((obj, index) => <li key={index}><Link to={obj.url} className={obj.class} > {obj.body} </Link></li>);

    return (
    <ul className="nav navbar-nav navbar-right ">
      <li className="dropdown hidden-xs " role="presentation">
        <a href="#" className="dropdown-toggle glyphicon glyphicon-user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span className="caret"></span></a>
        <ul className="dropdown-menu" >
          {this.props.user ? log : li}
        </ul>
      </li>
    </ul>
    );
  }
}
