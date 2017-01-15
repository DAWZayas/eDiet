// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _ from 'lodash';

import {getMenuAction, createMenuAction} from '../../store/actions';
import Menu from '../../components/draw';

const mapStateToProps = (state) => ({
   menus: state.menus.menu,
   route: state.routing.locationBeforeTransitions.pathname,
 });

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: _.once(() => dispatch(getMenuAction())),
  navTo: Menu => dispatch(push(Menu)),
  createMenu: payload=> dispatch(createMenuAction(payload)),
});

const Create = ({ menus, doGetMenu, route, navTo, createMenu}) => {
  doGetMenu();
  let menuName;

  const handleCreateMenu = (e) => {
    e.preventDefault();
    const name = menuName.value;
    createMenu({name});
  };

  return (
      <div className="container" >
        <div className="panel panel-default">
            <div className="panel-heading">
              Create menu
            </div>
            <div className="panel-footer ">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="newName"
                placeholder="Enter your new menu Name..."
                ref={(i) => { menuName = i; }}
              />
              <span type="submit" className=" input-group-addon  " >
                <span className="glyphicon glyphicon-check" onClick={handleCreateMenu}> </span>
              </span>
              </div>
            </div>
        </div>
        {menus.map( (obj, index) =>   <Menu key={index} menu={obj.name} route={route} navTo={navTo} /> )}
      </div>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
