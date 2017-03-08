import React from 'react';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';

import Modals from '../modals/buttons';
import { addObservable, removeObservable} from '../../store/actions';
import {registerMenuObservable} from '../../store/realTime';

let styles = require('./style.scss');

const mapDispatchToProps = dispatch => ({
  addObservable: observable => dispatch(addObservable(observable)),
  removeObservable: observable => dispatch(removeObservable(observable)),
});

const style = {
  panel: {
    margin: '5% 0 0 0',
  },
};

class Menus extends React.Component{

    constructor(props){
        super(props);
        const {payload: observable} = this.props.addObservable(registerMenuObservable(this.props.menu));
        this.state={observable, background: null};
    }

    componentWillMount(){
      /Menu/.test(this.props.route) ? this.setState({background : 'rgba(169, 198, 145, 0.9)' }) :
        /timeFood/.test(this.props.route) ? this.setState({background : 'rgba(184, 128, 104, 0.7)' }) :
        this.setState({background : 'rgba(150, 113, 110, 0.7)' });
    }
    componentWillUnmount() {
        const {removeObservable} = this.props;
        const {observable} = this.state;
        removeObservable(observable);
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

      const colorHeading = {
        background: this.state.background,
      }

      return(
        <div className="panel panel-default" style={style.panel}>
            <div className="panel-heading" style={{backgroundColor: 'rgb(255, 255, 255)', border: 'none'}}>
              {/Menu/.test(this.props.route) ? <p><a  onClick={handleMenu} href="#" className="glyphicon glyphicon-plus" style={{color: 'rgb(57, 144, 128)'}} role="button"></a>Menu name :{this.props.menu}, Menu Level: {this.props.level}
                <Modals menu={this.props.menu} route={this.props.route}/></p> : null}

              {/timeFood/.test(this.props.route) ? <p><a  onClick={handleTimeFood} href="#" className="glyphicon glyphicon-plus"  style={{color: 'rgb(12,145,82)'}} role="button"/>Time Food name:{this.props.menu}
                <Modals menu={this.props.menuName} timeFood={this.props.menu} route={this.props.route}/></p> : null }

              {/food/.test(this.props.route) ? <p>food: {this.props.menu}, calories: {this.props.calories}
                <Modals menu={this.props.menuName} timeFood={this.props.timeFood} food={this.props.menu} route={this.props.route}/> </p>: null }
            </div>
          </div>
        );
      }
  }
export default connect(null, mapDispatchToProps)(Menus);
