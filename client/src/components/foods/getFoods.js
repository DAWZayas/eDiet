import React, {Component}from 'react';
import {drawPageFood, drawAllFoods} from '../../util';

export default class GetFoods extends Component {

  constructor(props){
      super(props);
      this.state = {check : false, foods: false};
  }

render(){
    let timeFoodName;
    let menuName;

    const handleGetFoods = (e) => {
      e.preventDefault();
      const nameMenu = menuName.value;
      const nameTimeFood = timeFoodName.value;
      const timeFoods = this.props.menus.filter( obj => obj.name === nameMenu && obj.timeFood === nameTimeFood ?
                        obj.foods : false).reduce((a,b) => a.concat(b));
      this.setState({foods: timeFoods.foods, check: true});
    };

    const handleGetAllMenus = (e) => {
      e.preventDefault();
      this.setState({check: false});
    };

  return(
    <div className="panel panel-default">
      <div className="panel-heading">Get Foods</div>
      <div className="panel-body">
        { this.state.check ? drawPageFood(this.state.foods) : drawAllFoods(this.props.menus)}
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <input className="input-group-addon"
            type="text"
            className="form-control"
            id="menuName"
            placeholder="Enter your menu name..."
            ref={(i) => { menuName = i; }}
          />
          <br/>
          <div className="input-group">
            <input className="input-group-addon"
              type="text"
              className="form-control"
              id="timeFoodName"
              placeholder="Enter your timeFood name..."
              ref={(i) => { timeFoodName = i; }}
            />
            <span className="input-group-btn" >
              <button type="submit" className="btn btn-default" onClick={handleGetFoods}>Get menu</button>
              <button type="submit" className="btn btn-default" onClick={handleGetAllMenus}>Get All menu</button>
            </span>
          </div>
        </form>
      </div>
    </div>
    );
  }
}
