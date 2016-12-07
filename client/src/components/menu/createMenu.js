import React, { Component, PropTypes } from 'react';

let createMenu;

export default class CreateMenu extends Component {

  render(){
    const handleCreateMenu = (e) => {
      e.preventDefault();
      const name = createMenu.value;
      this.props.doCreateMenu({name});
      return false;
    }

    return (
    <div className="panel panel-default">
      <div className="panel-heading">Create Menu</div>
      <div className="panel-body">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="createMenu"
          placeholder="Enter your new menu name"
          ref={(i) => { createMenu = i; }}
        />
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <button type="submit" className="btn btn-default" onClick={handleCreateMenu}>
            New menu
          </button>
        </form>
      </div>
    </div>
    );
  }

}
