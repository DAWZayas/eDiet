import React, { Component, PropTypes } from 'react';

export default class administrationMenu extends Component {


  render() {


    const administrationMenu = [
      {
        body: "Add Menu",
        //falta Url
      },
      {
        body: "Update Menu",
        //falta Url
      },
      {
        body: "Delete Menu",
        //falta Url
      },
      {
        body: "Add Time Food",
        //falta Url
      },
      {
        body: "Update Time Food",
        //falta Url
      },
      {
        body: "Delete Time Food",
        //falta Url
      },
      {
        body: "Add Food",
        //falta Url
      },
      {
        body: "Update Food",
        //falta Url
      },
      {
        body: "Delete Food",
        //falta Url
      },
    ];

      const menu = administrationMenu.map((obj, index) => <li key={index}><a href="#" className={obj.class}> {obj.body} </a></li>);

    return (
      <ul className="nav navbar-nav navbar-left " >
        <li className="dropdown hidden-xs " role="presentation">
          <a href="#" className="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Gestion de Menus <span className="caret"></span></a>
          <ul className="dropdown-menu" >
            {menu}
          </ul>

        </li>
      </ul>
    );
  }
}
