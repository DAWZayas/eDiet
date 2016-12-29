import React, {Component}from 'react';
import {drawPageTimeFood} from '../../util';

export default class GetTimeFoods extends Component {

  constructor(props){
      super(props);
      this.state = {check : false, timeFoods: false};
  }

render(){
    let menuName;

    const handleGetTimeFoods = (e) => {
      e.preventDefault();
      const nameMenu = menuName.value;
      this.setState({check: true});
      const timeFoods = this.props.menus.filter( ({name}) => name === nameMenu);
      this.setState({timeFoods});
    };

    const handleGetAllMenus = (e) => {
      e.preventDefault();
      this.setState({check: false});
    };

  return(
    <div className="panel panel-default">
      <div className="panel-heading">Get Time Foods</div>
      <div className="panel-body">
        { this.state.check ? drawPageTimeFood(this.state.timeFoods) :drawPageTimeFood(this.props.menus)}
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <div className="input-group">
            <input className="input-group-addon"
              type="text"
              className="form-control"
              id="menuName"
              placeholder="Enter your timeFood name..."
              ref={(i) => { menuName = i; }}
            />
            <span className="input-group-btn" >
              <button type="submit" className="btn btn-default" onClick={handleGetTimeFoods}>Get menu</button>
              <button type="submit" className="btn btn-default" onClick={handleGetAllMenus}>Get All menu</button>
            </span>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
