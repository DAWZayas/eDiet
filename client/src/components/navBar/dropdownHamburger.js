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
        body: 'Ejercicios',
        //falta URL;
      },
      {
        body: 'Dietas',
      },
      {
        body: "Admón. menús",
        url: "/addMenu",
      },
      {
        body: "Admón. ejercicios",
        url: "/tables",
      },
    ];


    const list = messageList.map((obj, index) => obj.body == 'Admón. menús' || obj.body == 'Admón. ejercicios' ?
      this.props.user ?
        this.props.user.role ?
        this.props.route === obj.url ?
          <li className="active" key={index} >
            <Link to={obj.url} style={{color:'black'}}>
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
