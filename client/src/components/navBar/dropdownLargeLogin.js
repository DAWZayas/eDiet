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
        class: "glyphicon glyphicon-user",
        body: "user area",
        url: '/user'
      }

    ];

      const log = logOutUser.map((obj, index) => index===0 ? <li key={index}><a href="#" className={obj.class} onClick={handleLogin} > {obj.body} </a></li> :
        <li key={index}><Link to={obj.url} className={obj.class}  > {obj.body} </Link></li>);

      const li = loginUser.map((obj, index) => <li key={index}><Link to={obj.url} className={obj.class} > {obj.body} </Link></li>);

    return (
    <div className="nav navbar-nav navbar-right " >
          {this.props.user ? log : li}

    </div>
    );
  }
}
