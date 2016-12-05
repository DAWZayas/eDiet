import React, { Component, PropTypes } from 'react';

export default class dropdownHamburger extends Component {

  render() {
    const messageList = [
      {
        body: 'Ejercicios',
        //falta URL;
      },
      {
        body: 'Dietas',
      },
      {
        body: 'Articulos de interes',
      },
      {
        body: 'Comentarios',
      },
    ];

    const list = messageList.map((obj, index) =>
      index === 0 ? <li key={index} className="active"><a href="#">{obj.body}</a></li>
      : <li key={index}><a href="#">{obj.body}</a></li>);
    return (
    <ul className="nav navbar-nav">
      {list}
    </ul>);
  }
}
