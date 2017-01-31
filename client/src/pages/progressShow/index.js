import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

import {getTimeFoodsAction} from '../../store/actions';
import Foods from '../../components/showFoods';

const mapStateToProps = (state) => ({
    timeFoods: state.timeFoods.timeFoods,
    route: state.routing.locationBeforeTransitions.pathname,
 });

const mapDispatchToProps = (dispatch) => ({
  doGetTimeFoods: payload => dispatch(getTimeFoodsAction(payload)),
});

class ShowMenu extends React.Component{
  constructor(props){

    super(props);
    const rout = this.props.route.split('/');
    const name = rout[rout.length-1];
    this.state = {name};
  }

  componentWillMount(){
    const {doGetTimeFoods} = this.props;
    doGetTimeFoods({name: this.state.name});
  }
  render(){
    return(
        <div className="container">
           <center style={{marginBottom: '5%'}}><h2>Menu name: {this.state.name}</h2></center>
           {this.props.timeFoods.map((obj, index)=> <Foods timeFood={obj.timeFood} foods={obj.foods}/>)}
        </div>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ShowMenu);
