import React, {Component} from 'react';

import AddTable from './add';

export default class Add extends Component {
  render() {
    return (
      <div>
        <AddTable
          tables={this.props.tables}
          createTable={this.props.createTable}
        />
      </div>
    );
  }
};
