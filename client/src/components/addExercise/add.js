import React, {Component} from 'react';

let exerciseName;
let exerciseCalories;
let exerciseType;
let exerciseTime;

export default class AddExercise extends Component {
  render(){
    const getTableName = () => {
      const array = this.props.route.split('/');
      const name = array[array.length - 2];
      this.state = {table: name};
    };

    const handleCreate = (e) => {
      e.preventDefault();
      const table = this.state.table;
      const name = exerciseName.value;
      const type = exerciseType.value;
      const time = exerciseTime.value;
      const calories = exerciseCalories.value;
      this.props.createExercise({table, name, type, time, calories});
      clearFields();
      return false;
    };

    const clearFields = () => {
      exerciseName.value = '';
      exerciseName.placeholder="Nombre...";
      exerciseType.value = '';
      exerciseType.placeholder="Tipo...";
      exerciseTime.value = '';
      exerciseTime.placeholder="Tiempo...";
      exerciseCalories.value = '';
      exerciseCalories.placeholder="Calorías quemadas...";
      return false;
    };

    getTableName();
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          Añadir ejercicio
        </div>
        <div className="panel-body">
          <div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseName"
                placeholder="Nombre..."
                ref={(i) => { exerciseName = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseTime"
                placeholder="Tiempo..."
                ref={(i) => { exerciseTime = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseType"
                placeholder="Tipo..."
                ref={(i) => { exerciseType = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exerciseCalories"
                placeholder="Calorías quemadas..."
                ref={(i) => { exerciseCalories = i; }}
              />
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <button type="submit" className="btn btn-default" onClick={handleCreate}>
            Crear
          </button>
        </div>
      </div>
    );
  }
}
