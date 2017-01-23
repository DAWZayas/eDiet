import React, { Component, PropTypes} from 'react';
import {Link} from 'react-router';
const styles = require('./style.scss');

export default class Logger extends Component {
  render() {
    const handleLogin = (e) => {
      e.preventDefault();
      this.props.doLogOut();
      this.props.navToLogin();
    };

    const logIn = [
      {
        body: "Log in",
        url: "/login",
      },
    ];

    const logOut = [
      {
        body: "Log out",
      },
  ];

    const logOutPrint = logOut.map((obj, index) =>
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

      const logInPrint = logIn.map((obj, index) =>
        <li key={index}>
          <Link to={obj.url} className={obj.class}>
            {obj.body}
          </Link>
        </li>
      );

    return (
      <div className={`nav navbar-nav navbar-right`}>
        {this.props.user ?
          logOutPrint
        :
          logInPrint
        }
      </div>
    );
  }
}
