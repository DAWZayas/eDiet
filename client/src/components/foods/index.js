import React, {Component} from 'react';

import CreateFoods  from './createFoods';
import DeleteFoods  from './deleteFoods';
import UpdateFoods from './updateFoods';
import GetFoods from './getFoods';

export default class Foods extends Component {
  render() {
    return (
      <div className="container">
          <CreateFoods doCreateFood={this.props.doCreateFood} createFood={this.props.createFood} status={this.props.status}/>
          <DeleteFoods doDeleteFood={this.props.doDeleteFood} menus={this.props.menus} status={this.props.status}/>
          <UpdateFoods doUpdateFood={this.props.doUpdateFood} menus={this.props.menus} updateFood={this.props.updateFood} status={this.props.status}/>
          <GetFoods menus={this.props.menus} status={this.props.status}/>
      </div>
    );
  }
};
