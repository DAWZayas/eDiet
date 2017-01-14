import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _ from 'lodash';

import {getFoodsAction} from '../../store/actions';
import Food from '../../components/draw';

const mapStateToProps = (state) => ({
   foods: state.foods.foods,
   route: state.routing.locationBeforeTransitions.pathname
 });

const mapDispatchToProps = (dispatch) => ({
  doGetFoods: _.once((payload) => dispatch(getFoodsAction(payload))),

});

const TimeFoods = ({route, foods, doGetFoods }) => {
  const rout = route.split('/');
  const nameTimeFood = rout[rout.length-1];
  const nameMenu = rout[rout.length-2];
  doGetFoods({nameMenu, nameTimeFood });
  console.log(foods);
  return (
    <div className="container">
     {foods.map( (obj, index)=> < Food key={index} menuName={nameMenu} timeFood={nameTimeFood} route={route} menu={obj.nameFood} calories={obj.calories} />)}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);
