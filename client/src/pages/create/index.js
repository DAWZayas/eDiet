// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _ from 'lodash';

import {getMenuAction} from '../../store/actions';
import Menu from '../../components/draw';

const mapStateToProps = (state) => ({
   menus: state.menus.menu,
   route: state.routing.locationBeforeTransitions.pathname,
 });

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: _.once(() => dispatch(getMenuAction())),
  navTo: Menu => dispatch(push(Menu))
});

const Create = ({ menus, doGetMenu, route, navTo}) => {
  doGetMenu();

  return (
      <div className="container" >
        {menus.map( (obj, index) =>   <Menu key={index} menu={obj.name} route={route} navTo={navTo} /> )}
      </div>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
