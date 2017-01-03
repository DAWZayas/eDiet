import React, {Component}from 'react';
import {drawMenu} from '../../util';
import {Spinner} from '../spinner';

export default class UpdateMenu extends Component {

  constructor(props){
      super(props);
      this.state = {menu: null, desplegate: true};
  }

  render () {
    let oldName;
    let newName;

    const handleUpdateMenu = (e) => {
      e.preventDefault();
      const oldname = oldName.value;
      const menu = this.props.menus.filter( obj => obj.name === oldname);
      const name = newName.value;
      this.props.doUpdateMenu({oldname, name});
      this.setState({menu});
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
          Update Menu
        </div>
      </div> :
      <div className="panel panel-default">
        <div className="panel-heading">
        <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-minus" role="button"/>
        Update Menu
        </div>
        <div className="panel-body">
          {this.props.status==='loading_update' ? <Spinner /> : this.state.menu ? <strike>{drawMenu(this.state.menu)}</strike> : null}
          {this.props.status==='loading_update' ? null : this.props.menuUpdate ? drawMenu(this.props.menuUpdate) : null}
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <input className="input-group-addon"
              type="text"
              className="form-control"
              id="oldName"
              placeholder="Enter your old menu name..."
              ref={(i) => { oldName = i; }}
            />
            <br/>
            <div className="input-group">
              <input className="input-group-addon"
                type="text"
                className="form-control"
                id="newName"
                placeholder="Enter your new menu Name..."
                ref={(i) => { newName = i; }}
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-default " onClick={handleUpdateMenu}>Update menu</button>
              </span>
            </div>
          </form>
        </div>
      </div>}
    </span>
    );
  }

}
