import React, {Component}from 'react';
import {drawPageTimeFood} from '../../util';

export default class UpdateTimeFood extends Component {

  constructor(props){
      super(props);
      this.state = {timeFood: false, desplegate: false};
  }

  render () {

    let updateTimeFood;
    let newName;
    let oldName;

    const handleUpdateTimeFood = (e) => {
      e.preventDefault();
      const name = updateTimeFood.value;
      const timeFood = newName.value;
      const oldTimeFood = oldName.value;
      this.setState({timeFood: [Object.assign({} , {name}, {timeFood: oldTimeFood})] });
      this.props.doUpdateTimeFood({name, timeFood, oldTimeFood});
      return false;
    };

    const handleDesplegate = (e) => {
      e.preventDefault();
      this.setState({desplegate: !this.state.desplegate});
    };

    return (
    <span>
    { this.state.desplegate ?
      <div className="panel panel-default">
        <div className="panel-heading">
          <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-plus" role="button"/>
          Create Menu
        </div>
      </div> :
      <div className="panel panel-default">
        <div className="panel-heading">
            <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-minus" role="button"/>
            Update TimeFoods
        </div>
        <div className="panel-body">
        <div className="col-sm-10">
        {this.props.updateTimeFood ?  <strike> {drawPageTimeFood(this.state.timeFood)} </strike> : null}
        {this.props.updateTimeFood ? drawPageTimeFood(this.props.updateTimeFood) : null}
        </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <input
              type="text"
              className="form-control"
              id="updateTimeFood"
              placeholder="Enter your menu name..."
              ref={(i) => { updateTimeFood = i; }}
            />
            <br/>
            <input
            type="text"
            className="form-control"
            id="oldName"
            placeholder="Enter your old name timeFood ..."
            ref={(i) => { oldName = i; }}
            />
            <br/>
            <div className= "input-group">
              <input className= "inpur-group-addon"
                type="text"
                className="form-control"
                id="newName"
                placeholder="Enter your new Name timeFood..."
                ref={(i) => { newName = i; }}
              />
              <span className="input-group-btn" >
                <button type="submit" className="btn btn-default" onClick={handleUpdateTimeFood}>Update menu</button>
              </span>
            </div>
          </form>
        </div>
    </div>}
  </span>
    );
  }

}
