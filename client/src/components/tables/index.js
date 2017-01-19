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
          hasMore={this.props.hasMore}
          loadingMore={this.props.loadingMore}
          getTables={this.props.getTables}
          getCreateTable={this.props.getCreateTable}
          addObservable={this.props.addObservable}
          removeObservable={this.props.removeObservable}
        />
      </div>
    );
  }
};
