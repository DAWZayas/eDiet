import React, {Component} from 'react';

import Get from './get';

export default class Tables extends Component {
  render() {
    return (
      <div>
        <Get
          tables={this.props.tables}
          createTable={this.props.createTable}
          deleteTable={this.props.deleteTable}
          updateTable={this.props.updateTable}
          status={this.props.status}
        />
      </div>
    );
  }
};
