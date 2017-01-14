import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _ from 'lodash';

import {getTimeFoodsAction} from '../../store/actions';
import TimeFood from '../../components/draw';

const mapStateToProps = (state) => ({
   timeFoods: state.timeFoods.timeFoods,
   route: state.routing.locationBeforeTransitions.pathname
 });

const mapDispatchToProps = (dispatch) => ({
  doGetTimeFoods: _.once((payload) => dispatch(getTimeFoodsAction(payload))),
  navTo: timeFood => dispatch(push(timeFood))
});

const TimeFoods = ({route, timeFoods, doGetTimeFoods, navTo}) => {
  const rout = route.split('/');
  const name = rout[rout.length-1];
  doGetTimeFoods({name });
  console.log(timeFoods);
  return (
    <div className="container">
     {timeFoods.map( (obj, index)=> < TimeFood key={index} route={route} menuName={name} menu={obj.timeFood} navTo={navTo}/>)}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);
