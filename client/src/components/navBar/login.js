import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
const styles = require('./style.scss');

export default class Login extends Component {
  render() {
    const handleLogin = (e) => {
      e.preventDefault();
      this.props.doLogOut();
      this.props.navToLogin();
    };

    const loginUser = [
      {
        class: "",
        body: "Log in",
        url: "/login",
      },
    ];

    const logOutUser = [
      {
        class: "glyphicon	glyphicon-off",
        body: "",
      },
  ];

    const log = logOutUser.map((obj, index) =>
      index === 0 ?
        <li key={index}>
          <a href="#" className={obj.class} onClick={handleLogin}>
            {obj.body}
          </a>
        </li>
      :
        <li key={index}>
          <Link to={obj.url} className={obj.class}>
            {obj.body}
          </Link>
        </li>
      );

      const li = loginUser.map((obj, index) =>
        <li key={index}>
          <Link to={obj.url} className={obj.class}>
            {obj.body}
          </Link>
        </li>
      );

    return (
    <div className={`nav navbar-nav navbar-right ${styles.log}`}>
          {this.props.user ? log : li}
    </div>
    );
  }
}
