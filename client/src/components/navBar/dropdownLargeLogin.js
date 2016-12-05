import React, { Component, PropTypes } from 'react';

export default class dropdownLargeLogin extends Component {


  render() {


    const loginUser = [
      {
        class: "glyphicon glyphicon-log-in",
        body: "Sign in",
        //falta Url
      },
      {
        class: "glyphicon glyphicon-pencil",
        body: "Sign up",
      }
    ];


      const li = loginUser.map((obj, index) => <li key={index}><a href="#" className={obj.class}> {obj.body} </a></li>);

    return (
    <ul className="nav navbar-nav navbar-right ">
      <li className="dropdown hidden-xs " role="presentation">
        <a href="#" className="dropdown-toggle glyphicon glyphicon-user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span className="caret"></span></a>
        <ul className="dropdown-menu" >
          {li}
        </ul>
      </li>
    </ul>);
  }
}
