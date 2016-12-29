import React, { Component, PropTypes } from 'react';
import {drawAllFoods} from '../../util';

export default class CreateFood extends Component {
  constructor(props){
      super(props);
      this.state = {time: false};
  }

  render(){

    let foods;
    let timeFoods;
    let menu;
    let calorie;

    const handleCreateFoods = (e) => {
      e.preventDefault();
      const nameTimeFood = timeFoods.value;
      const nameMenu = menu.value;
      const nameFood = foods.value;
      const calories = calorie.value;
      this.props.doCreateFood({nameMenu, nameTimeFood, nameFood, calories});
      return false;
    };

    return (
    <div className="panel panel-default">
      <div className="panel-heading">Create Food</div>
      <div className="panel-body">
      <div className="col-sm-10">
        {this.props.createFood ? drawAllFoods([this.props.createFood]) : null }
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <input className="input-group-addon"
            type="text"
            className="form-control"
            id="menu"
            placeholder="Enter your Menu"
            ref={(i) => { menu = i; }}
          />
        <br/>
          <input className="input-group-addon"
            type="text"
            className="form-control"
            id="timeFoods"
            placeholder="Enter your time food"
            ref={(i) => { timeFoods = i; }}
          />
          <br/>
          <input className="input-group-addon"
            type="text"
            className="form-control"
            id="foods"
            placeholder="Enter your Food "
            ref={(i) => { foods = i; }}
          />
          <br/>
          <div className="input-group">
            <input className="input-group-addon"
              type="text"
              className="form-control"
              id="calorie"
              placeholder="Enter your calories"
              ref={(i) => { calorie = i; }}
            />
            <span className="input-group-btn" >
              <button type="submit" className="btn btn-default" onClick={handleCreateFoods}>New Food</button>
            </span>
          </div>
        </form>
      </div>
    </div>
    );
  }

}
