import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

const textColors = {
    color: 'white',
}


export default class dropdownHamburger extends Component {
  constructor (props){
    super(props);
  }
  render() {
    const messageList = [
      {
        body: 'Home',
        url:'/',
      },
      {
        body: 'Exercises',
        //falta URL;
      },
      {
        body: 'Diets',
      },
      {
        body: "Menus admin",
        url: "/addMenu",
      },
      {
        body: "Exercises admin",
        url: "/tables",
      },
      {
        class: "divider",
      }
    ];


    const list = messageList.map((obj, index) => obj.body == 'Menus admin' || obj.body == 'Exercises admin' ?
      this.props.user ?
        this.props.user.role ?
        this.props.route === obj.url ?
          <li className="active" key={index} >
            <Link to={obj.url} style={{color:'orangeRed', backgroundColor:'transparent'}}>
              {obj.body}
            </Link>
          </li> :
          <li key={index}  >
            <Link to={obj.url} style={textColors}>
              {obj.body}
            </Link>
          </li>
        :
          null
      :
        null
    :
      <li key={index}>
        <Link to={obj.url} style={textColors}>
          {obj.body}
        </Link>
      </li>
    );

    return (
    <ul className="nav navbar-nav" >
      {list}
    </ul>);
  }
}
