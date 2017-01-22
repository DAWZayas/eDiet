import React, {Component} from 'react';

let exerciseName;
let exerciseCalories;
let exerciseType;
let exerciseTime;

let styles = require('./style.scss');
let footer = {
  borderTop: 'none',
  backgroundColor: 'rgb(255, 255, 255)',

};
let button = {
    color: 'rgb(232, 142, 58)',
};

export default class AddExercise extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log('State', this.state);

    const getTableName = () => {
      const array = this.props.route.split('/');
      const name = array[array.length - 2];
      this.state = {table: name};
    };

    const clearFields = () => {
      exerciseName.value = '';
      exerciseName.placeholder="Name...";
      exerciseTime.value = '';
      exerciseTime.placeholder="Time...";
      exerciseCalories.value = '';
      exerciseCalories.placeholder="Burned calories...";
      return false;
    };

    const handleChange = e => {
      this.setState({select: e.target.value});
    };

    const handleCreate = (e) => {
      console.log('>>>StateCR', this.state);
      e.preventDefault();
      const table = this.state.table;
      const name = exerciseName.value;
      const type = exerciseType.value;
      {/*const type = this.state.select;*/}
      const time = exerciseTime.value;
      const calories = exerciseCalories.value;
      this.props.createExercise({table, name, type, time, calories});
      clearFields();
      return false;
    };

    getTableName();
    return(
      <div className={`panel panel-default ${styles.container}`}>
        <div className="panel-heading">
          Add exercise
        </div>
        <div className="panel-body">
          <div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseName"
                placeholder="Name..."
                ref={(i) => { exerciseName = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseTime"
                placeholder="Time..."
                ref={(i) => { exerciseTime = i; }}
              />
            </div>
            <div className="col-sm-10">
              <select
                className="form-control"
                name="exerciseType"
                id="exerciseType"
                value={this.state.select}
                onChange={handleChange}
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
                type="text"
                className="form-control"
                id="exerciseCalories"
                placeholder="Burned calories..."
                ref={(i) => { exerciseCalories = i; }}
              />
            </div>
          </div>
        </div>
        <div className="panel-footer" style={footer}>
          <button type="submit" className="btn btn-default" onClick={handleCreate} style={button}>
            Create
          </button>
        </div>
      </div>
    );
  }
}
