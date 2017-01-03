import React, {Component}from 'react';
import {drawPageFood, drawPageTimeFood, drawAllFoods} from '../../util';

export default class UpdateFood extends Component {

  constructor(props){
      super(props);
      this.state = { timeFoods: false, timeFood: false, desplegate: false};
  }

  render () {

    let menuName;
    let updateTimeFood;
    let newName;
    let oldName;
    let calorie;

    const handleUpdateTimeFood = (e) => {
      e.preventDefault();
      const nameTimeFood = updateTimeFood.value;
      const food = newName.value;
      const oldFood = oldName.value;
      const nameMenu = menuName.value;
      const calories = calorie.value;
      const timeFood = this.props.menus.filter( obj => obj.name === nameMenu && obj.timeFood === nameTimeFood).reduce( (a,b)=> a.concat(b));
      const timeFoods = timeFood.foods.filter( obj => obj.nameFood === oldFood );
      this.setState({timeFoods, timeFood});
      this.props.doUpdateFood({nameMenu, nameTimeFood, food, oldFood, calories});
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
          Update Foods
        </div>
        <div className="panel-body">
        <div className="col-sm-10">
          {this.props.updateFood ?  <div> {drawPageTimeFood([this.state.timeFood])} <strike> {drawPageFood(this.state.timeFoods)} </strike> </div>:null }
          {this.props.updateFood ?  <div> {drawPageTimeFood([this.state.timeFood])} {drawPageFood(this.props.updateFood)} </div>: null}
        </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <input
              type="text"
              className="form-control"
              id="menuName"
              placeholder="Enter your menu..."
              ref={(i) => { menuName = i; }}
            />
            <br/>
            <input
              type="text"
              className="form-control"
              id="updateTimeFood"
              placeholder="Enter your timeFood..."
              ref={(i) => { updateTimeFood = i; }}
            />
            <br/>
            <input
            type="text"
            className="form-control"
            id="oldName"
            placeholder="Enter your old name ..."
            ref={(i) => { oldName = i; }}
            />
            <br/>
            <input className= "inpur-group-addon"
              type="text"
              className="form-control"
              id="newName"
              placeholder="Enter your new Name..."
              ref={(i) => { newName = i; }}
            />
            <br/>
            <div className= "input-group">
              <input className= "inpur-group-addon"
                type="text"
                className="form-control"
                id="calorie"
                placeholder="Enter your new Name..."
                ref={(i) => { calorie = i; }}
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
