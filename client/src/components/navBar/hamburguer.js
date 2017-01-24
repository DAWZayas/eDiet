import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

const styles = require('./style.scss');
const style = {
  text: {
    color: 'rgb(15, 15, 15)',
  }
};

export default class Hamburger extends Component {
  constructor (props){
    super(props);
  }
  render() {
    const list = [
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

    const printList = list.map((obj, index) => obj.body == 'Menus admin' || obj.body == 'Exercises admin' ?
      this.props.user ?
        this.props.user.role ?
          this.props.route === obj.url ?
            <li className="active" key={index}  style={{color:'white'}}>
              <Link to={obj.url} data-toggle="collapse" data-target=".navbar-collapse" style={{color:'rgb(12, 145, 82)', backgroundColor:'transparent', fontSize:'150%'}}>
                {obj.body}
              </Link>
            </li>
          :
            <li key={index}  >
              <Link to={obj.url} data-toggle="collapse" data-target=".navbar-collapse" style={{color:'white', fontSize:'150%'}}>
                {obj.body}
              </Link>
            </li>
        :
          null
      :
        null
    :
      <li key={index}>
        <Link to={obj.url} data-toggle="collapse" data-target=".navbar-collapse" style={{color:'white', fontSize:'150%'}}>
          {obj.body}
        </Link>
      </li>
  );

    return (
      <ul className={`nav navbar-nav ${styles.hamburguerUl}`} style={style.text}>
        {printList}
      </ul>
    );
  }
}
