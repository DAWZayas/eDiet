// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createMenuAction} from '../../store/actions';

const mapStateToProps = (state) => ({
   menus: state.menus.menu,
 })

const mapDispatchToProps = (dispatch) => ({
  doCreateMenu: payload => dispatch(createMenuAction(payload)),
});


const Create = ({doCreateMenu, menus}) => {
  let menuName;
  let displayMenuName;

  const handleMenu = (e) => {
    e.preventDefault();
    const name = menuName.value;
    doCreateMenu({name});
    return false;
  };

  /*if (menus.length>0){ displayMenuName =<h2> menus.filter( obj => obj.name) </h2>;
  }*/
  console.log(menus);

  return (
      <div className="panel panel-default">
      <div className="panel-heading">Create Menu</div>
      <div className="panel-body">
          {displayMenuName}
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="menuName"
              placeholder="Enter your answer..."
              ref={(i) => { menuName = i; }}
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={handleMenu}>
            New menu
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
