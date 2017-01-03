import React, { Component, PropTypes } from 'react';
import {drawMenu} from '../../util';
import {Spinner} from '../spinner';

export default class CreateMenu extends Component {

  constructor(props){
      super(props);
      this.state = {desplegate: true };
  }

  render(){

    let createMenu;

    const handleCreateMenu = (e) => {
      e.preventDefault();
      const name = createMenu.value;
      this.props.doCreateMenu({name});
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
          Create Menu
        </div>
        <div className="panel-body">
        <div className="col-sm-10">
          {this.props.status === 'loading_getName' ? <Spinner/> : this.props.menuCreate ? drawMenu(this.props.menuCreate) : null}
        </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <div className="input-group">
              <input className="input-group-addon"
                type="text"
                className="form-control"
                id="createMenu"
                placeholder="Enter your new menu name"
                ref={(i) => { createMenu = i; }}
              />
              <span className="input-group-btn" >
                <button type="submit" className="btn btn-default " onClick={handleCreateMenu}>New menu</button>
              </span>
            </div>
          </form>
        </div>
      </div>}
    </span>
      );
  }

}
