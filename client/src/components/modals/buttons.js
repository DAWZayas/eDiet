import React from 'react';
import {connect} from 'react-redux';

import {deleteMenuAction, updateMenuAction, updateTimeFoodAction, deleteTimeFoodAction,
  updateFoodAction, deleteFoodAction } from '../../store/actions';
import ModalUpdate from './modalUpdate';
import ModalDelete from './modalDelete';

const mapStateToProps = (state) => ({
  route: state.routing.locationBeforeTransitions.pathname,
});

const mapDispatchToProps = (dispatch) => ({
  doDeleteMenu: payload => dispatch(deleteMenuAction(payload)),
  doUpdateMenu: payload => dispatch(updateMenuAction(payload)),

  doDeleteTimeFood: payload => dispatch(deleteTimeFoodAction(payload)),
  doUpdateTimeFood: payload => dispatch(updateTimeFoodAction(payload)),

  doDeleteFood: payload => dispatch(deleteFoodAction(payload)),
  doUpdateFood: payload => dispatch(updateFoodAction(payload))
});


const ButtonMenu = ({doDeleteMenu, doUpdateMenu, route, doDeleteTimeFood, doUpdateTimeFood, doDeleteFood,
                      doUpdateFood, menu, timeFood, food}) => {

  return (
    <span>
      {/Menu/.test(route) ?
        <span>
          <ModalUpdate route={route} menu={menu} update={doUpdateMenu} />
          <ModalDelete route={route} menu={menu} deletes={doDeleteMenu} />
        </span> : null}
      {/timeFood/.test(route) ?
        <span>
          <ModalUpdate route={route} menu={menu} timeFood={timeFood} update={doUpdateTimeFood} />
          <ModalDelete route={route} menu={menu} timeFood={timeFood} deletes={doDeleteTimeFood} />
        </span> : null}
      {/food/.test(route) ?
        <span>
          <ModalUpdate route={route} menu={menu} timeFood={timeFood} food={food} update={doUpdateFood} />
          <ModalDelete route={route} menu={menu} timeFood={timeFood} food={food} deletes={doDeleteFood} />
        </span>: null }
    </span>
  );
};

export default connect(null, mapDispatchToProps)(ButtonMenu);
