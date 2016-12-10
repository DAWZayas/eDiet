import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getMenuAction, createTimeFoodAction, deleteTimeFoodAction, updateTimeFoodAction} from '../../store/actions';
import TimeFood from '../../components/timeFoods';

const mapStateToProps = (state) => ({
   menus: state.menus.menu,
 })

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: _.once(() => dispatch(getMenuAction())),
  doCreateTimeFood: payload => dispatch(createTimeFoodAction(payload)),
  doDeleteTimeFood: payload => dispatch(deleteTimeFoodAction(payload)),
  doUpdateTimeFood: payload => dispatch(updateTimeFoodAction(payload)),
});

const TimeFoods = ({doCreateTimeFood, menus, doGetMenu, doDeleteTimeFood, doUpdateTimeFood}) => {
  doGetMenu();
  return (  <TimeFood menus={menus} doCreateTimeFood={doCreateTimeFood} doGetMenu={doGetMenu}
              doDeleteTimeFood={doDeleteTimeFood} doUpdateTimeFood={doUpdateTimeFood}/>);
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);
