import React, {Component} from 'react';

let exerciseNewName;
let exerciseCalories;
let exerciseType;
let exerciseTime;

const styles = require('./style.scss');

let footer = {
  backgroundColor: 'rgb(255, 255, 255)',
  borderTop: 'none',
};

export default class UpdateExercise extends Component {
  constructor(props) {
    super(props);
    const array = this.props.route.split('/');
    const table = array[array.length - 3];
    const exercise = array[array.length - 1];
    this.state = {table, exercise, select: undefined};

    this.handleChange = this.handleChange.bind(this);
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
      this.props.updateExercise({table, name, newName, calories, type, time});
      clearFields();
      return false;
    };

    const clearFields = () => {
      exerciseNewName.value = '';
      exerciseNewName.placeholder="Nuevo nombre...";
      exerciseTime.value = '';
      exerciseTime.placeholder="Nuevo tiempo...";
      exerciseCalories.value = '';
      exerciseCalories.placeholder="Nuevas calorías quemadas...";
      return false;
    };

    return(
      <div className={`panel panel-default ${styles.container}`}>
        <div className="panel-heading">
          Actualizar ejercicio
        </div>
        <div className="panel-body">
          <div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseNewName"
                placeholder="Nuevo nombre..."
                ref={(i) => { exerciseNewName = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseTime"
                placeholder="Nuevo tiempo..."
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
                type="text"
                className="form-control"
                id="exerciseCalories"
                placeholder="Nuevas calorías quemadas..."
                ref={(i) => { exerciseCalories = i; }}
              />
            </div>
          </div>
        </div>
        <div className={`panel-footer ${styles.footer}`} style={footer}>
          <button type="submit" className="btn btn-default" onClick={handleUpdate}>
            Actualizar
          </button>
        </div>
      </div>
    );
  }
}
