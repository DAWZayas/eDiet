import React, {Component}from 'react'

export default class UpdateTimeFood extends Component {

  render () {
    const handleUpdateTimeFood = (e) => {
      e.preventDefault();
      const id = updateTimeFood.value;
      const timeFood = newName.value;
      const oldTimeFood = oldName.value;
      this.props.doUpdateTimeFood({id, timeFood, oldTimeFood})
      return false;
    };

    let updateTimeFood;
    let newName;
    let oldName;
    return (
    <div className="panel panel-default">
      <div className="panel-heading">Update TimeFoods</div>
      <div className="panel-body">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="updateTimeFood"
          placeholder="Enter your id..."
          ref={(i) => { updateTimeFood = i; }}
        />
      </div>
      <br/><br/><br/>
      <div className="col-sm-10">
        <input
        type="text"
        className="form-control"
        id="oldName"
        placeholder="Enter your old name ..."
        ref={(i) => { oldName = i; }}
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

          <button type="submit" className="btn btn-default" onClick={handleUpdateTimeFood}>
            Update menu
          </button>
        </form>
      </div>
  </div>
    );
  }

}
