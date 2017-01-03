import React, {Component}from 'react';
import {drawMenu} from '../../util';

export default class DeleteMenu extends Component {

  constructor(props){
      super(props);
      this.state = {desplegate: true };
  }

  render () {

    let menuName;

    const handleDeleteMenu = (e) => {
      e.preventDefault();
      const name = menuName.value;
      this.props.doDeleteMenu({name});
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
          Delete Menu
        </div>
      </div> :

      <div className="panel panel-default">
        <div className="panel-heading">
          <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-minus" role="button"/>
          Delete Menu
        </div>
        <div className="panel-body">
        <div className="col-sm-10">
          {this.props.menuDelete ? <strike> {drawMenu(this.props.menuDelete)} </strike> : null}

        </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <div className="input-group">
              <input className="input-group-btn"
                type="text"
                className="form-control"
                id="menuName"
                placeholder="Enter your menu name..."
                ref={(i) => { menuName = i; }}
              />
              <span type="submit" className="input-group-btn" >
                <button type="submit" className="btn btn-default " onClick={handleDeleteMenu}>Delete menu</button>
              </span>
            </div>
          </form>
        </div>
      </div>}
    </span>
    );
  }
}
