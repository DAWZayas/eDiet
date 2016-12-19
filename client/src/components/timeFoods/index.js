import React, {Component} from 'react'

import CreateTimeFoods  from './createTimeFoods';
import DeleteTimeFoods  from './deleteTimeFoods';
import UpdateTimeFoods from './updateTimeFoods';
import GetTimeFoods from './getTimeFoods';

export default class TimeFoods extends Component {
  render() {
    return (
      <div>
          <CreateTimeFoods doCreateTimeFood={this.props.doCreateTimeFood} createTimeFood={this.props.createTimeFood}/>
          <DeleteTimeFoods doDeleteTimeFood={this.props.doDeleteTimeFood} menus={this.props.menus} />
          <UpdateTimeFoods doUpdateTimeFood={this.props.doUpdateTimeFood} updateTimeFood={this.props.updateTimeFood} />
          <GetTimeFoods menus={this.props.menus} />
      </div>
    );
  }
};
