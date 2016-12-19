import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getMenuAction, createTimeFoodAction, deleteTimeFoodAction, updateTimeFoodAction, getTimeFoodAction} from '../../store/actions';
import TimeFood from '../../components/timeFoods';

const mapStateToProps = (state) => ({
   menus: state.timeFoods.timeFood,
   updateTimeFood: state.timeFoods.update,
   createTimeFood: state.timeFoods.create,
 })

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: _.once(() => dispatch(getTimeFoodAction())),
  doCreateTimeFood: payload => dispatch(createTimeFoodAction(payload)),
  doDeleteTimeFood: payload => dispatch(deleteTimeFoodAction(payload)),
  doUpdateTimeFood: payload => dispatch(updateTimeFoodAction(payload)),
});

const TimeFoods = ({doCreateTimeFood, menus, doGetMenu, doDeleteTimeFood, doUpdateTimeFood, updateTimeFood, createTimeFood}) => {
  doGetMenu();
  return (  <TimeFood menus={menus} doCreateTimeFood={doCreateTimeFood} doGetMenu={doGetMenu}
              doDeleteTimeFood={doDeleteTimeFood} doUpdateTimeFood={doUpdateTimeFood} updateTimeFood={updateTimeFood}
              createTimeFood={createTimeFood}/>);
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);
