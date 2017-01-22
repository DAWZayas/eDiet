import React, {Component} from 'react';

let tableName;
let tableLevel;

let styles = require('./style.scss');
let footer = {
  borderTop: 'none',
  backgroundColor: 'rgb(255, 255, 255)',
};

export default class AddTable extends Component {
  render(){

    const handleCreate = (e) => {
      e.preventDefault();
      const name = tableName.value;
      const level = tableLevel.value;
      this.props.createTable({name, level});
      clearFields();
      return false;
    };

    const clearFields = () => {
      tableName.value = '';
      tableName.placeholder="Table name...";
      tableLevel.value = '';
      tableLevel.placeholder="Table level...";
      return false;
    };

    return(
      <div className={`panel panel-default ${styles.container}`}>
        <div className="panel-heading">
          Add table
        </div>
        <div className={`panel-body`}>
          <div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tableName"
                placeholder="Table name..."
                ref={(i) => { tableName = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tableLevel"
                placeholder="Table level..."
                ref={(i) => { tableLevel = i; }}
              />
            </div>
          </div>
        </div>
        <div className={`panel-footer ${styles.footer}`} style={footer}>
          <button type="submit" className="btn btn-default" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    );
  }
}
