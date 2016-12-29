import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getFoodsAction, createFoodAction, deleteFoodAction, updateFoodAction} from '../../store/actions';
import Food from '../../components/foods';

const mapStateToProps = (state) => ({
  menus: state.foods.foods,
  createFood: state.foods.createFood,
  updateFood: state.foods.foodsUpdate,
  status: state.foods.status,
 });

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: _.once(() => dispatch(getFoodsAction())),
  doCreateFood: payload => dispatch(createFoodAction(payload)),
  doDeleteFood: payload => dispatch(deleteFoodAction(payload)),
  doUpdateFood: payload => dispatch(updateFoodAction(payload)),
});

const TimeFoods = ({menus, doGetMenu, doCreateFood, doDeleteFood, doUpdateFood, createFood, updateFood, status}) => {
  doGetMenu();
  return (  <Food menus={menus} doGetMenu={doGetMenu} doCreateFood={doCreateFood} doDeleteFood={doDeleteFood}
                  doUpdateFood={doUpdateFood} createFood={createFood} updateFood={updateFood} status={status}/>);
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);
