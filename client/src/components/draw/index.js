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
}

class Menus extends React.Component{

    constructor(props){
        super(props);
        const {payload: observable} = this.props.addObservable(registerMenuObservable(this.props.menu));
        this.state={observable};
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

      return(
        <div className="panel panel-default" style={style.panel}>
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
export default connect(null, mapDispatchToProps)(Menus);
