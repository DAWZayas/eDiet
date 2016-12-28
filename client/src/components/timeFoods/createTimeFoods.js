import React, { Component, PropTypes } from 'react';

let createTimeFood;
let timeFoodId;

export default class CreateTimeFood extends Component {
  constructor(props){
      super(props);
      this.state = {time: false};
  }

  render(){
    const handleCreateTimeFoods = (e) => {
      e.preventDefault();
      const timeFood = createTimeFood.value;
      const id = timeFoodId.value;
      this.setState({time : timeFood});
      this.props.doCreateTimeFood({id, timeFood});
      return false;
    }


    return (
    <div className="panel panel-default">
      <div className="panel-heading">Create Time Food</div>
      <div className="panel-body">
      <div className="col-sm-10">
        { this.props.createTimeFood ? this.props.createTimeFood.map((obj, index) => obj.timeFood === this.state.time
            ? <p key= {index}> {obj.timeFood} </p>: null)  : null}
        <input
          type="text"
          className="form-control"
          id="timeFoodId"
          placeholder="Enter your timeFood id"
          ref={(i) => { timeFoodId = i; }}
        />
        <br/>
        <input
          type="text"
          className="form-control"
          id="createTimeFood"
          placeholder="Enter your new timeFood name"
          ref={(i) => { createTimeFood = i; }}
        />
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <button type="submit" className="btn btn-default" onClick={handleCreateTimeFoods}>
            New timeFood
          </button>
        </form>
      </div>
    </div>
    );
  }

}