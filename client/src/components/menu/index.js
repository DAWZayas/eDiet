import React, {Component} from 'react';

import CreateMenu from './createMenu';
import DeleteMenu from './deleteMenu';
import UpdateMenu from './updateMenu';
import GetMenu from './getMenu';


export default class Menu extends Component {
  render() {
    return (
      <div className="container">
          <CreateMenu doCreateMenu={this.props.doCreateMenu} menuCreate={this.props.menuCreate} status={this.props.status}/>
          <DeleteMenu doDeleteMenu={this.props.doDeleteMenu} menuDelete={this.props.menuDelete} status={this.props.status}/>
          <UpdateMenu doUpdateMenu={this.props.doUpdateMenu} menuUpdate={this.props.menuUpdate} menus={this.props.menus} status={this.props.status}/>
          <GetMenu menus={this.props.menus} status={this.props.status} />
      </div>
    );
  }
};
