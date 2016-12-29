import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class Administration extends Component {

  render() {

    const administration = [
      {
        body: "Administration menu",
        url: "/addMenu",
      },
      {
        body: "Administratition time food",
        url:'/timeFood',
      },
      {
        body: "Administratition food",
        url:'/foods',
      }
    ];

    const admin = administration.map((obj, index) => <li key={index}><Link to={obj.url} > {obj.body} </Link></li>);

    return (

        <ul className="nav navbar-nav ">
          { this.props.user ?
              this.props.user.role ?
                <li className="dropdown" role="presentation">
                  <a href="#"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Administration<span className="caret"></span></a>
                  <ul className="dropdown-menu" >
                    {admin}
                  </ul>
                </li>
              :null
          : null}
        </ul>
    );
  }
}
