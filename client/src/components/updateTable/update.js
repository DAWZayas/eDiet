import React, {Component} from 'react';

let exerciseNewName;

let styles = require('./style.scss');
let style = {
  footer: {
      borderTop: 'none',
      backgroundColor: 'rgb(255, 255, 255)',
  }
};

export default class UpdateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {exercise: null, select: undefined};

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const array = this.props.route.split('/');
    const table = array[array.length - 3];
    const exercise = array[array.length - 1];
    this.setState({exercise: exercise});
  }

  handleChange(e) {
    this.setState({select: e.target.value});
  }

  render() {
    const handleUpdate = (e) => {
      e.preventDefault();
      const name = this.state.exercise;
      const newName = exerciseNewName.value;
      const level = this.state.select;
      this.props.updateTable({name, newName, level});
      clearFields();
      return false;
    };

    const clearFields = () => {
      exerciseNewName.value = '';
      exerciseNewName.placeholder="New name...";
      return false;
    };

    return(
      <div className={`panel panel-default ${styles.container}`}>
        <div className={`panel-body`}>
          <center>
            <div className="col-xm-10" style={{marginBottom: '2%'}}>
              <input
                type="text"
                className="form-control"
                id="exerciseNewName"
                placeholder="New name..."
                ref={(i) => { exerciseNewName = i; }}
              />
            </div>
            <div className="col-xm-10" style={{marginBottom: '2%'}}>
              <select
                className="form-control"
                name="newLevel"
                id="newLevel"
                value={this.state.select}
                onChange={this.handleChange}
              >
                <option value=" ">Select a table level</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </center>
        </div>
        <div className={`panel-footer ${styles.footer}`} style={style.footer}>
          <button type="submit" className="btn btn-default" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    );
  }
}
