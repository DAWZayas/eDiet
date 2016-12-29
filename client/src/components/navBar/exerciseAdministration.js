import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class ExerciseAdministration extends Component {

  render() {
    const list = [
      {
        body: "Tablas",
        url: "/exerciseTableManagement",
      },
      {
        body: "Ejercicios",
        url:'/exercisesManagement',
      },
    ];

    const dropdown = list.map((obj, index) =>
      <li key={index}>
        <Link to={obj.url}>
          {obj.body}
        </Link>
      </li>
    );

    return (
      <ul className="nav navbar-nav ">
        {
          this.props.user ?
            this.props.user.role ?
              <li className="dropdown" role="presentation">
                <a href="#"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Admón. ejercicios
                  <span className="caret">
                  </span>
                </a>
                <ul className="dropdown-menu" >
                  {dropdown}
                </ul>
              </li>
            : null
          : null
        }
      </ul>
    );
  }
}
