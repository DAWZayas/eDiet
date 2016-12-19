import React, {Component}from 'react'

export default class UpdateTimeFood extends Component {

  constructor(props){
      super(props);
      this.state = {oldTimeFood: false, timeFood: false};
  }

  render () {
    const handleUpdateTimeFood = (e) => {
      e.preventDefault();
      const id = updateTimeFood.value;
      const timeFood = newName.value;
      const oldTimeFood = oldName.value;
      this.setState({timeFood});
      this.props.doUpdateTimeFood({id, timeFood, oldTimeFood});
      this.setState({oldTimeFood});
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
        {this.props.updateTimeFood ?  <strike> <p > {this.state.oldTimeFood} </p> </strike> : null}
        {this.props.updateTimeFood ?
          this.props.updateTimeFood.map(obj => obj.timeFoods.map( (obj,index) => obj.timeFood === this.state.timeFood ?
               <p key= {index}> {obj.timeFood} </p>: null) ) : null}
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
