// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {createMenuAction, getMenuAction, deleteMenuAction, updateMenuAction, getMenuNameAction} from '../../store/actions';
import Menu from '../../components/menu';

const mapStateToProps = (state) => ({
   menus: state.menus.menu,
   menuDelete: state.menus.delete,
   menuCreate: state.menus.men,
   menuUpdate: state.menus.update,
   status: state.menus.status,
 })

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: _.once(() => dispatch(getMenuAction())),
  doCreateMenu: payload => dispatch(createMenuAction(payload)),
  doDeleteMenu: payload => dispatch(deleteMenuAction(payload)),
  doUpdateMenu: payload => dispatch(updateMenuAction(payload)),

});

const Create = ({doCreateMenu, menus, doGetMenu, doDeleteMenu, doUpdateMenu, menuDelete, menuCreate, menuUpdate,status}) => {
  doGetMenu();
  return (  <Menu menus={menus} doCreateMenu={doCreateMenu} doDeleteMenu={doDeleteMenu} status={status}
            doUpdateMenu={doUpdateMenu}  menuDelete={menuDelete} doGetMenu={doGetMenu} menuCreate={menuCreate}
            menuUpdate={menuUpdate}/>);
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
