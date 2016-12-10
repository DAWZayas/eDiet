import React, {Component} from 'react'



export default class DeleteTimeFood extends Component {

  render () {
    const handleDeleteTimeFood = (e) => {
      e.preventDefault();
      const id = menuId.value;
      const timeFoods = timeFoodName.value;
      console.log(id);
      console.log({id,timeFoods});
      //al pasarle el timeFood no me la coge en el cliente y en postman si
      this.props.doDeleteTimeFood({id, timeFoods});
      return false;
    };
    let timeFoodName;
    let menuId;
    return (
    <div className="panel panel-default">
      <div className="panel-heading">Delete TimeFood</div>
      <div className="panel-body">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="menuId"
          placeholder="Enter your menu id..."
          ref={(i) => { menuId = i; }}
        />
        <br/>
        <input
          type="text"
          className="form-control"
          id="timeFoodName"
          placeholder="Enter your timeFood name..."
          ref={(i) => { timeFoodName = i; }}
        />
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <button type="submit" className="btn btn-default" onClick={handleDeleteTimeFood}>
            Delete menu
          </button>
        </form>
      </div>
    </div>
    );
  }
}
