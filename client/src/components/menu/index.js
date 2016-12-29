import React, {Component} from 'react';

import CreateMenu from './createMenu';
import DeleteMenu from './deleteMenu';
import UpdateMenu from './updateMenu';
import GetMenu from './getMenu';
import {Spinner} from '../spinner';

export default class Menu extends Component {
  render() {
    return (
      <div className="container">
      {this.props.status === 'loading' ?  <Spinner/> :
        <div>
          <CreateMenu doCreateMenu={this.props.doCreateMenu} menuCreate={this.props.menuCreate}/>
          <DeleteMenu doDeleteMenu={this.props.doDeleteMenu} menuDelete={this.props.menuDelete}/>
          <UpdateMenu doUpdateMenu={this.props.doUpdateMenu} menuUpdate={this.props.menuUpdate} menus={this.props.menus}/>
          <GetMenu menus={this.props.menus}/>
        </div>}
      </div>
    );
  }
};
