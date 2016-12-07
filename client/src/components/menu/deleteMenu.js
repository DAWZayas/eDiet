import React, {Component}from 'react'

let deleteMenu;

export default class DeleteMenu extends Component {

  render () {
    const handleDeleteMenu = (e) => {
      e.preventDefault();
      const id = deleteMenu.value;
      const token = localStorage.getItem('user.token')
      this.props.doDeleteMenu({id});
      return false;
    };

    return (
    <div className="panel panel-default">
      <div className="panel-heading">Delete Menu</div>
      <div className="panel-body">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="deleteMenu"
          placeholder="Enter your answer..."
          ref={(i) => { deleteMenu = i; }}
        />
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <button type="submit" className="btn btn-default" onClick={handleDeleteMenu}>
            Delete menu
          </button>
        </form>
      </div>
    </div>
    );
  }
}
