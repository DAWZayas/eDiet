import React, {Component} from 'react';

let exerciseNewName;
let exerciseNewLevel;

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
      const newLevel = this.state.select;
      this.props.updateTable({name, newName, newLevel});
      clearFields();
      return false;
    };

    const clearFields = () => {
      exerciseNewName.value = '';
      exerciseNewName.placeholder="New name...";
      return false;
    };

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          Update table
        </div>
        <div className="panel-body">
          <div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseNewName"
                placeholder="New name..."
                ref={(i) => { exerciseNewName = i; }}
              />
            </div>
            <div className="col-sm-10">
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
          </div>
        <div className="panel-footer">
          <button type="submit" className="btn btn-default" onClick={handleUpdate}>
            Actualizar
          </button>
        </div>
      </div>
    </div>

    );
  }
}
