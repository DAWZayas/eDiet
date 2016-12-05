import React, {Component} from 'react';

export default class UlCompany extends Component {
  render() {
    const links = [
      {
        body: 'Acerca de',
        // url: '';
      },
      {
        body: 'Atención al cliente',
        // url: '';
      },
      {
        body: 'Noticias',
        // url: '';
      },
    ];
    const li = links.map((object, index) => <li key={index} style={this.props.style}><a href="#">{object.body}</a></li>);
    return (
      <ul className="nav">{li}</ul>
    );
  }
}
