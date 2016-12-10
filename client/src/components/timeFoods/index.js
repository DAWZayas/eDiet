import React, {Component} from 'react'

import CreateTimeFoods  from './createTimeFoods';
import DeleteTimeFoods  from './deleteTimeFoods';
import UpdateTimeFoods from './updateTimeFoods';
import GetTimeFoods from './getTimeFoods';

export default class TimeFoods extends Component {
  render() {
    return (
      <div>
          <CreateTimeFoods doCreateTimeFood={this.props.doCreateTimeFood}/>
          <DeleteTimeFoods doDeleteTimeFood={this.props.doDeleteTimeFood}/>
          <UpdateTimeFoods doUpdateTimeFood={this.props.doUpdateTimeFood}/>
          <GetTimeFoods menus={this.props.menus} />
      </div>
    );
  }
};
