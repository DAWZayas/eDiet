import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _ from 'lodash';

import {getTimeFoodsAction, createTimeFoodAction} from '../../store/actions';
import TimeFood from '../../components/draw';

const mapStateToProps = (state) => ({
   timeFoods: state.timeFoods.timeFoods,
   route: state.routing.locationBeforeTransitions.pathname
 });

const mapDispatchToProps = (dispatch) => ({
  doGetTimeFoods: _.once((payload) => dispatch(getTimeFoodsAction(payload))),
  navTo: timeFood => dispatch(push(timeFood)),
  createTimeFood: payload=> dispatch(createTimeFoodAction(payload))
});

const TimeFoods = ({route, timeFoods, doGetTimeFoods, navTo, createTimeFood}) => {
  const rout = route.split('/');
  const name = rout[rout.length-1];
  doGetTimeFoods({name });

  const handleCreateTimeFood = (e) => {
    e.preventDefault();
    const timeFood = timeFoodss.value;
    createTimeFood({name, timeFood});
  };

  const style = {
    marginTop: '2%',
  }

  let timeFoodss;

  return (
    <div className="container" style={style}>
      <div className="panel panel-default">
        <div className="panel-heading">
          Create Time Food
        </div>
        <div className="panel-footer ">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="newName"
            placeholder="Time food name..."
            ref={(i) => { timeFoodss = i; }}
          />
          <span type="submit" className=" input-group-addon  " >
            <span className="glyphicon glyphicon-check" onClick={handleCreateTimeFood}> </span>
          </span>
          </div>
          </div>
        </div>
     {timeFoods.map( (obj, index)=> < TimeFood key={index} route={route} menuName={name} menu={obj.timeFood} navTo={navTo}/>)}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);
