import React, {Component} from 'react';

export default class UlOtro extends Component {
  render() {
    const links = [
      {
        body: 'Otro',
        // url: '';
      },
      {
        body: 'Otro',
        // url: '';
      },
      {
        body: 'Otro',
        // url: '';
      },
    ];
    const li = links.map((object, index) => <li key={index}><a href="#">{object.body}</a></li>);
    return (
      <ul className="nav">{li}</ul>
    );
  }
}
