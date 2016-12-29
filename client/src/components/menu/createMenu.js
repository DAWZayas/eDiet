import React, { Component, PropTypes } from 'react';
import {drawMenu} from '../../util';

export default class CreateMenu extends Component {

  render(){

    let createMenu;

    const handleCreateMenu = (e) => {
      e.preventDefault();
      const name = createMenu.value;
      this.props.doCreateMenu({name});
      return false;
    };

    return (
    <div className="panel panel-default">
      <div className="panel-heading">Create Menu</div>
      <div className="panel-body">
      <div className="col-sm-10">
        {this.props.menuCreate ? drawMenu(this.props.menuCreate) : null}
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <div className="input-group">
            <input className="input-group-addon"
              type="text"
              className="form-control"
              id="createMenu"
              placeholder="Enter your new menu name"
              ref={(i) => { createMenu = i; }}
            />
            <span className="input-group-btn" >
              <button type="submit" className="btn btn-default " onClick={handleCreateMenu}>New menu</button>
            </span>
          </div>
        </form>
      </div>
    </div>
    );
  }

}
