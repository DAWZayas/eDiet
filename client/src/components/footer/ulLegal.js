import React, {Component} from 'react';

export default class UlLegal extends Component {
  render() {
    const links = [
      {
        body: 'Cookies policy',
        // url: '';
      },
      {
        body: 'Legal advice',
        // url: '';
      },
      {
        body: 'Data Protection',
        // url: '';
      },
    ];
    const li = links.map((object, index) => <li key={index}><a href="#">{object.body}</a></li>);
    return (
      <ul className="nav">{li}</ul>
    );
  }
}
