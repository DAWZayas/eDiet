import React, {Component} from 'react';

import CreateTimeFoods  from './createTimeFoods';
import DeleteTimeFoods  from './deleteTimeFoods';
import UpdateTimeFoods from './updateTimeFoods';
import GetTimeFoods from './getTimeFoods';
import {Spinner} from '../spinner';

export default class TimeFoods extends Component {
  render() {
    return (
      <div className="container">
          <CreateTimeFoods doCreateTimeFood={this.props.doCreateTimeFood} createTimeFood={this.props.createTimeFood} status={this.props.status}/>
          <DeleteTimeFoods doDeleteTimeFood={this.props.doDeleteTimeFood} menus={this.props.menus} status={this.props.status}/>
          <UpdateTimeFoods doUpdateTimeFood={this.props.doUpdateTimeFood} updateTimeFood={this.props.updateTimeFood} status={this.props.status}/>
          <GetTimeFoods menus={this.props.menus} status={this.props.status}/>
      </div>
    );
  }
};
