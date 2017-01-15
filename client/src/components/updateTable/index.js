import React, {Component} from 'react';
import UpdateTable from './update';

export default class Update extends Component {
  render() {
    return (
      <div>
        <UpdateTable
          tables={this.props.tables}
          updateTable={this.props.updateTable}
          route={this.props.route}
        />
      </div>
    );
  }
};
