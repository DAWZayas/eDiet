import React, {Component} from 'react';

let tableName;
let tableLevel;

let styles = require('./style.scss');
let footer = {
  borderTop: 'none',
  backgroundColor: 'rgb(255, 255, 255)',
};

export default class AddTable extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.state = {select: undefined};
  };

  handleChange (e) {
    this.state.select = e.target.value;
  }

  render(){
    const handleCreate = (e) => {
      e.preventDefault();
      const name = tableName.value;
      const level = this.state.select;
      this.props.createTable({name, level});
      clearFields();
      return false;
    };

    const clearFields = () => {
      tableName.value = '';
      tableName.placeholder="Table name...";
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
              <select
                className="form-control"
                name="tableLevel"
                id="tableLevel"
                value={this.state.select}
                onChange={this.handleChange}
              >
                <option value=" ">Select an exercise level</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
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
