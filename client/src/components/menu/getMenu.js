import React, {Component}from 'react';
import {drawMenu} from '../../util';

export default class GetMenu extends Component {

  constructor(props){
      super(props);
      this.state = {menu: null};
  }

render(){
    let getMenu;
    let menuFilter;

    const handleGetMenu = (e) => {
      e.preventDefault();
      const name = getMenu.value;
      const menuFilter = this.props.menus.filter(obj => obj.name === name ? true : false);
      this.setState({menu: menuFilter});
    };

    const handleGetAllMenu = (e) => {
      e.preventDefault();
      this.setState({menu: null});
    };

  return(
    <div className="panel panel-default">
      <div className="panel-heading">Get Menu
      </div>
      <div className="panel-body">
        {this.state.menu ? drawMenu(this.state.menu) : drawMenu(this.props.menus)}
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
            <div className="input-group">
              <input className="input-group-addon"
                type="text"
                className="form-control"
                id="getMenu"
                placeholder="Enter your menu name..."
                ref={(i) => { getMenu = i; }}
              />
              <span className="input-group-btn" >
                <button type="submit" className="btn btn-default " onClick={handleGetMenu}>Get menu</button>
              </span>
              <span className="input-group-btn" >
                <button type="submit" className="btn btn-default " onClick={handleGetAllMenu}>Get all menu</button>
              </span>
            </div>
        </form>
      </div>
    </div>
    );
  }
}
