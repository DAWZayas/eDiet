import React, {Component} from 'react';

export default class UlSocial extends Component {
  render() {
    const links = [
      {
        name: 'Instagram',
        class: 'fa fa-instagram',
        // url: '';
      },
      {
        name: 'Facebook',
        class: 'fa fa-facebook',
        // url: '';
      },
      {
        name: 'Twitter',
        class: 'fa fa-twitter',
        // url: '';
      },
    ];
    const li = links.map((object, index) => <li key={index}><a href="#"><span className={object.class} aria-hidden="true"></span></a></li>);
    return (
      <ul className="nav">{li}</ul>
    );
  }
}
