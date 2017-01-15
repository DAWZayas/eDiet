import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class dropdownHamburger extends Component {

  render() {
    const messageList = [
      {
        body: 'Home',
        url:'/',
      },
      {
        body: 'Ejercicios',
        //falta URL;
      },
      {
        body: 'Dietas',
      },
      {
        body: "Administration",
        url: "/addMenu",
      },
    ];


    const list = messageList.map((obj, index) => obj.body == 'Administration' ?
          this.props.user ?
              this.props.user.role ?  <li key={index}><Link to={obj.url}>{obj.body}</Link></li> : null
          : null
    : <li key={index}><Link to={obj.url}>{obj.body}</Link></li>);

    return (
    <ul className="nav navbar-nav">
      {list}
    </ul>);
  }
}
