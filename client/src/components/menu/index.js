import React, {Component} from 'react'

import CreateMenu from './createMenu';
import DeleteMenu from './deleteMenu';
import UpdateMenu from './updateMenu';
import GetMenu from './getMenu';

export default class Menu extends Component {
  render() {
    return (
      <div>
          <CreateMenu doCreateMenu={this.props.doCreateMenu}/>
          <DeleteMenu doDeleteMenu={this.props.doDeleteMenu}/>
          <UpdateMenu doUpdateMenu={this.props.doUpdateMenu}/>
          <GetMenu menus={this.props.menus}/>
      </div>
    );
  }
};
