import React, {Component} from 'react';

import CreateFoods  from './createFoods';
import DeleteFoods  from './deleteFoods';
import UpdateFoods from './updateFoods';
import GetFoods from './getFoods';
import {Spinner} from '../spinner';
export default class Foods extends Component {
  render() {
    return (
      <div className="container">
      {this.props.status === 'loading' ?  <Spinner/> :
        <div>
          <CreateFoods doCreateFood={this.props.doCreateFood} createFood={this.props.createFood}/>
          <DeleteFoods doDeleteFood={this.props.doDeleteFood} menus={this.props.menus} />
          <UpdateFoods doUpdateFood={this.props.doUpdateFood} menus={this.props.menus} updateFood={this.props.updateFood} />
          <GetFoods menus={this.props.menus} />
        </div> }
      </div>
    );
  }
};
