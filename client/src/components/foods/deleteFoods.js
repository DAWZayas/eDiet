import React, {Component} from 'react';
import {drawPageFood, drawPageTimeFood} from '../../util';

export default class DeleteFood extends Component {

  constructor(props){
      super(props);
      this.state = {timeFoods : null, timeFood:null};
  }

  render () {
    let timeFoodName;
    let menuId;
    let foodName;

    const handleDeleteTimeFood = (e) => {
      e.preventDefault();
      const nameMenu = menuId.value;
      const nameTimeFood = timeFoodName.value;
      const food = foodName.value;
      const timeFood = this.props.menus.filter( obj => obj.name === nameMenu && obj.timeFood === nameTimeFood).reduce( (a,b)=> a.concat(b));
      const timeFoods = timeFood.foods.filter( obj => obj.nameFood === food );
      this.setState({timeFoods, timeFood});
      this.props.doDeleteFood({nameMenu, nameTimeFood, food});
      return false;
    };

    return (
    <div className="panel panel-default">
      <div className="panel-heading">Delete Food</div>
      <div className="panel-body">
      <div className="col-sm-10">
        {this.state.timeFoods ? drawPageTimeFood([this.state.timeFood]) :null}
        {this.state.timeFoods ? <strike> {drawPageFood(this.state.timeFoods)} </strike>:null}
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
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
            placeholder="Enter your timeFood name id..."
            ref={(i) => { timeFoodName = i; }}
          />
          <br/>
          <div className="input-group">
            <input className="input-group-addon"
              type="text"
              className="form-control"
              id="foodName"
              placeholder="Enter your Food name..."
              ref={(i) => { foodName = i; }}
            />
            <span className="input-group-btn" >
              <button type="submit" className="btn btn-default" onClick={handleDeleteTimeFood}>Delete time food</button>
            </span>

          </div>
        </form>
      </div>
    </div>
    );
  }
}
