import React, {Component} from 'react'

import CreateMenu from './createMenu';
import DeleteMenu from './deleteMenu';
import UpdateMenu from './updateMenu';
import GetMenu from './getMenu';

export default class Menu extends Component {
  render() {
    return (
      <div>
          <CreateMenu doCreateMenu={this.props.doCreateMenu} menuCreate={this.props.menuCreate}/>
          <DeleteMenu doDeleteMenu={this.props.doDeleteMenu} menuDelete={this.props.menuDelete}/>
          <UpdateMenu doUpdateMenu={this.props.doUpdateMenu} menuUpdate={this.props.menuUpdate} menus={this.props.menus}/>
          <GetMenu menus={this.props.menus}/>
      </div>
    );
  }
};
