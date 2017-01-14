import React from 'react';
import {Link} from 'react-router';
import {push} from 'react-router-redux';

import Modals from '../modals/buttons';

export default class Menus extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

      const handleMenu = (e) => {
        e.preventDefault();
        let route;
        route =`/timeFood/${ this.props.menu }`;
        this.props.navTo(route);
      };

      const handleTimeFood = (e) => {
        e.preventDefault();
        let route;
        route =`/food/${ this.props.menuName}/${this.props.menu}`;
        this.props.navTo(route);
      };

      return(
        <div className="panel panel-default">
            <div className="panel-heading">
              {/Menu/.test(this.props.route) ? <p><a  onClick={handleMenu} href="#" className="glyphicon glyphicon-plus" role="button"></a>{this.props.menu}
                <Modals menu={this.props.menu} route={this.props.route}/></p> : null}

              {/timeFood/.test(this.props.route) ? <p><a  onClick={handleTimeFood} href="#" className="glyphicon glyphicon-plus" role="button"/>{this.props.menu}
                <Modals menu={this.props.menuName} timeFood={this.props.menu} route={this.props.route}/></p> : null }

              {/food/.test(this.props.route) ? <p>comida: {this.props.menu}  calorias: {this.props.calories}
                <Modals menu={this.props.menuName} timeFood={this.props.timeFood} food={this.props.menu} route={this.props.route}/> </p>: null }
            </div>
          </div>
        );
      }
  }
