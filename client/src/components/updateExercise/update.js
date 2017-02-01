import React, {Component} from 'react';

let exerciseNewName;
let exerciseCalories;
let exerciseType;
let exerciseTime;
let exerciseSeries;
let exerciseRepeats;

const styles = require('./style.scss');

let footer = {
  backgroundColor: 'rgb(255, 255, 255)',
  borderTop: 'none',
};

export default class UpdateExercise extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const array = this.props.route.split('/');
    const table = array[array.length - 3];
    const exercise = array[array.length - 1];
    this.state = {table, exercise, select: undefined};
  }

  handleChange (e) {
    this.state.select = e.target.value;
  }

  render(){
    const handleUpdate = (e) => {
      e.preventDefault();
      const table = this.state.table;
      const name = this.state.exercise;
      const newName = exerciseNewName.value;
      const calories = exerciseCalories.value;
      const type = this.state.select;
      const time = exerciseTime.value;
      const series = exerciseSeries.value;
      const repeats = exerciseRepeats.value;
      this.props.updateExercise({table, name, newName, calories, type, time, series, repeats});
      clearFields();
      return false;
    };

    const clearFields = () => {
      exerciseName.value = '';
      exerciseName.placeholder="New name...";
      exerciseTime.value = '';
      exerciseTime.placeholder="New time (in minutes)...";
      exerciseCalories.value = '';
      exerciseCalories.placeholder="New burned calories (in kcal)...";
      exerciseSeries.value = '';
      exerciseSeries.placeholder="New number of series...";
      exerciseRepeats.value='';
      exerciseRepeats.placeholder="New number of repeats...";
      return false;
    };

    return(
      <div className={`panel panel-default ${styles.container}`}>
        <div className="panel-heading">
          Update exercise
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
              <input
                type="number"
                className="form-control"
                id="exerciseTime"
                placeholder="New time..."
                ref={(i) => { exerciseTime = i; }}
              />
            </div>

            <div className="col-sm-10">
              <select
                className="form-control"
                name="exerciseType"
                id="exerciseType"
                value={this.state.select}
                onChange={this.handleChange}
              >
                <option value=" ">Select an exercise type</option>
                <option value="cardiovascular">Cardiovascular</option>
                <option value="strength">Strength</option>
                <option value="flexibility">Flexibility</option>
                <option value="balance">Balance</option>
              </select>
            </div>

            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="exerciseCalories"
                placeholder="New burned calories..."
                ref={(i) => { exerciseCalories = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="exerciseSeries"
                placeholder="Number of series..."
                ref={(i) => { exerciseSeries = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="exerciseRepeats"
                placeholder="Number of repeats..."
                ref={(i) => { exerciseRepeats = i; }}
              />
            </div>
          </div>
        </div>
        <div className={`panel-footer ${styles.footer}`} style={footer}>
          <button type="submit" className="btn btn-default" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    );
  }
}
