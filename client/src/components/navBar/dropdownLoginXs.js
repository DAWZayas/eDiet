import React, { Component, PropTypes } from 'react';
export default class dropdownLoginXs extends Component {
render() {
  const loginXsUser = [
    {
      class: "glyphicon glyphicon-log-in",
      body: "Sign in",
      //falta Url
    },
    {
      class: "glyphicon glyphicon-pencil",
      body: "Sign up",
    },
  ];

  const li = loginXsUser.map((obj, index) => <li key={index}><a href="#" className={obj.class}> {obj.body} </a></li>);

    return (
        <ul className="nav navbar-nav hidden-sm hidden-md hidden-lg">
          {li}
        </ul>
    );
  }
}
