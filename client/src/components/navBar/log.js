import React, { Component, PropTypes} from 'react';
import {Link} from 'react-router';
const styles = require('./style.scss');

export default class Logger extends Component {
  render() {
    const textColors = {
        color: 'white',
    };

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
        <li key={index} >
          <a href="#" style={textColors} className={obj.class} onClick={handleLogin}>
            {obj.body}
          </a>
        </li>
      :
        <li key={index} >
          <Link style={textColors} to={obj.url} className={obj.class} data-toggle="collapse" data-target=".navbar-collapse">
            {obj.body}
          </Link>
        </li>
      );


      const logInPrint = logIn.map((obj, index) =>
        <li key={index}>
          <Link to={obj.url} className={obj.class} data-toggle="collapse" data-target=".navbar-collapse" style={{color:'white', fontSize:'100%'}}>
            {obj.body}
          </Link>
        </li>
      );

    return (
      <div className={`nav navbar-nav navbar-right`} style={{color:'white', fontSize:'150%'}}>
        {this.props.user ?
          logOutPrint
        :
          logInPrint
        }
      </div>
    );
  }
}
