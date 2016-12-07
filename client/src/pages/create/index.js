// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {createMenuAction, getMenuAction, deleteMenuAction, updateMenuAction} from '../../store/actions';
import Menu from '../../components/menu';

const mapStateToProps = (state) => ({
   menus: state.menus.menu,
 })

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: _.once(() => dispatch(getMenuAction())),
  doCreateMenu: payload => dispatch(createMenuAction(payload)),
  doDeleteMenu: payload => dispatch(deleteMenuAction(payload)),
  doUpdateMenu: payload => dispatch(updateMenuAction(payload)),
});

const Create = ({doCreateMenu, menus, doGetMenu, doDeleteMenu, doUpdateMenu}) => {
  doGetMenu();
  return (  <Menu menus={menus} doCreateMenu={doCreateMenu} doDeleteMenu={doDeleteMenu} doUpdateMenu={doUpdateMenu}/>);
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
