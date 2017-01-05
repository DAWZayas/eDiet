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
    ];


    const list = messageList.map((obj, index) =>
      index === 0 ? <li key={index}><Link to={obj.url}>{obj.body}</Link></li>
      : <li key={index}><a href="#">{obj.body}</a></li>);
    return (
    <ul className="nav navbar-nav">
      {list}
    </ul>);
  }
}
