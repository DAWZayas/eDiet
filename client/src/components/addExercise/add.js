import React, {Component} from 'react';

let exerciseName;
let exerciseCalories;
let exerciseType;
let exerciseTime;
let exerciseSeries;
let exerciseRepeats;

let styles = require('./style.scss');

let footer = {
  backgroundColor: 'rgb(255, 255, 255)',
  borderTop: 'none',
};

let header = {
  backgroundColor: 'rgb(12, 145, 82)',
};

export default class AddExercise extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const tableArray = this.props.route.split('/');
    const table = tableArray[tableArray.length - 2];
    this.state = {select: undefined, table: table};
  }

  handleChange (e) {
    this.state.select = e.target.value;
  }

  render(){
    const {route, createExercise} = this.props;
    const clearFields = () => {
      exerciseName.value = '';
      exerciseName.placeholder="Name...";
      exerciseTime.value = '';
      exerciseTime.placeholder="Time (in minutes)...";
      exerciseCalories.value = '';
      exerciseCalories.placeholder="Burned calories (in kcal)...";
      exerciseSeries.value = '';
      exerciseSeries.placeholder="Number of series...";
      exerciseRepeats.value='';
      exerciseRepeats.placeholder="Number of repeats...";
      return false;
    };

    const handleCreate = (e) => {
      e.preventDefault();
      const table = this.state.table;
      const name = exerciseName.value;
      const type = this.state.select;
      const time = exerciseTime.value;
      const calories = exerciseCalories.value;
      const series = exerciseSeries.value;
      const repeats = exerciseRepeats.value;
      createExercise({table, name, type, time, calories, series, repeats});
      clearFields();
      return false;
    };

    return(
      <div className={`panel panel-default ${styles.container}`}>
        <div className="panel-body">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="exerciseName"
                placeholder="Name..."
                ref={(i) => { exerciseName = i; }}
              />
            </div>
            <div className="col-sm-12">
              <input
                type="number"
                className="form-control"
                id="exerciseTime"
                placeholder="Time (in minutes)..."
                ref={(i) => { exerciseTime = i; }}
              />
            </div>
            <div className="col-sm-12">
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
            <div className="col-sm-12">
              <input
                type="number"
                className="form-control"
                id="exerciseCalories"
                placeholder="Burned calories (in kcal)..."
                ref={(i) => { exerciseCalories = i; }}
              />
            </div>
            <div className="col-sm-12">
              <input
                type="number"
                className="form-control"
                id="exerciseSeries"
                placeholder="Number of series..."
                ref={(i) => { exerciseSeries = i; }}
              />
            </div>
            <div className="col-sm-12">
              <input
                type="number"
                className="form-control"
                id="exerciseRepeats"
                placeholder="Number of repeats..."
                ref={(i) => { exerciseRepeats = i; }}
              />
            </div>
        </div>
        <div className={`panel-footer ${styles.footer}`} style={footer}>
          <button type="submit" className="btn btn-default" onClick={handleCreate} >
            Create
          </button>
        </div>
      </div>
    );
  }
}
