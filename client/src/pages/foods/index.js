import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _ from 'lodash';

import {getFoodsAction, createFoodAction} from '../../store/actions';
import Food from '../../components/draw';

const mapStateToProps = (state) => ({
   foods: state.foods.foods,
   route: state.routing.locationBeforeTransitions.pathname
 });

const mapDispatchToProps = (dispatch) => ({
  doGetFoods: _.once((payload) => dispatch(getFoodsAction(payload))),
  createFood: payload => dispatch(createFoodAction(payload)),
});

const TimeFoods = ({route, foods, doGetFoods, createFood }) => {
  const rout = route.split('/');
  const nameTimeFood = rout[rout.length-1];
  const nameMenu = rout[rout.length-2];
  doGetFoods({nameMenu, nameTimeFood });

  const handleCreateFood = (e) => {
    e.preventDefault();
    const nameFood = foodss.value;
    const calories = calorie.value;
    console.log({nameMenu, nameTimeFood, nameFood, calories });
    createFood({nameMenu, nameTimeFood, nameFood, calories });
  };

  let foodss, calorie;

  return (
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          Create Time Food
        </div>
        <div className="panel-footer ">
        <input
          type="text"
          className="form-control"
          id="newName"
          placeholder="Enter your new menu Name..."
          ref={(i) => { foodss = i; }}
        />
        <br/>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="newName"
            placeholder="Enter your new menu Name..."
            ref={(i) => { calorie = i; }}
          />
          <span type="submit" className=" input-group-addon  " >
            <span className="glyphicon glyphicon-check" onClick={handleCreateFood}> </span>
          </span>
          </div>
          </div>
        </div>
     {foods.map( (obj, index)=> < Food key={index} menuName={nameMenu} timeFood={nameTimeFood} route={route} menu={obj.nameFood} calories={obj.calories} />)}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);
