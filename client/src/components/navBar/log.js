import React, { Component, PropTypes} from 'react';
import {Link} from 'react-router';
const styles = require('./style.scss');

const style = {
  text: {
    color: 'white',
    size: '5em',
  }
};

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
        <li key={index} >
          <a href="#" style={style.text} className={obj.class} onClick={handleLogin} data-toggle="collapse" data-target=".navbar-collapse">
            {obj.body}
          </a>
        </li>
      :
        <li key={index} >
          <Link to={obj.url} className={obj.class} data-toggle="collapse" data-target=".navbar-collapse" style={style.text}>
            {obj.body}
          </Link>
        </li>
      );


      const logInPrint = logIn.map((obj, index) =>
        <li key={index}>
          <Link to={obj.url} className={obj.class} data-toggle="collapse" data-target=".navbar-collapse" style={style.text}>
            {obj.body}
          </Link>
        </li>
      );

    return (
      <div className={`nav navbar-nav navbar-right`} style={style.text}>
        {this.props.user ?
          logOutPrint
        :
          logInPrint
        }
      </div>
    );
  }
}
