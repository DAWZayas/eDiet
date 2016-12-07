import React, {Component}from 'react'



export default class UpdateMenu extends Component {

  render () {
    const handleUpdateMenu = (e) => {
      e.preventDefault();
      const id = updateMenu.value;
      const name = newName.value;
      this.props.doUpdateMenu({id, name})
      return false;
    };

    let updateMenu;
    let newName;
    return (
    <div className="panel panel-default">
      <div className="panel-heading">Update Menu</div>
      <div className="panel-body">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="updateMenu"
          placeholder="Enter your id..."
          ref={(i) => { updateMenu = i; }}
        />
      </div>
      <br/><br/><br/>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="newName"
          placeholder="Enter your new Name..."
          ref={(i) => { newName = i; }}
        />
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">

          <button type="submit" className="btn btn-default" onClick={handleUpdateMenu}>
            Update menu
          </button>
        </form>
      </div>
  </div>
    );
  }

}
