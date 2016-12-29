import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getTimeFoodAction, createTimeFoodAction, deleteTimeFoodAction, updateTimeFoodAction, getTimeFoodsAction} from '../../store/actions';
import TimeFood from '../../components/timeFoods';

const mapStateToProps = (state) => ({
   menus: state.timeFoods.timeFoods,
   createTimeFood: state.timeFoods.timeFoodCreate,
   updateTimeFood: state.timeFoods.updateTimeFood,
   status: state.timeFoods.status,
 });

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: _.once(() => dispatch(getTimeFoodsAction())),
  doCreateTimeFood: payload => dispatch(createTimeFoodAction(payload)),
  doDeleteTimeFood: payload => dispatch(deleteTimeFoodAction(payload)),
  doUpdateTimeFood: payload => dispatch(updateTimeFoodAction(payload)),
});

const TimeFoods = ({doCreateTimeFood, menus, doGetMenu, doDeleteTimeFood, doUpdateTimeFood, updateTimeFood, createTimeFood, status}) => {
  doGetMenu();
  return (  <TimeFood menus={menus} doCreateTimeFood={doCreateTimeFood} doGetMenu={doGetMenu} status={status}
              doDeleteTimeFood={doDeleteTimeFood} doUpdateTimeFood={doUpdateTimeFood} updateTimeFood={updateTimeFood}
              createTimeFood={createTimeFood} />);
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);
