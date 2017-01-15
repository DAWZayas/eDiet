import React, {Component} from 'react';

let exerciseNewName;
let exerciseCalories;
let exerciseType;
let exerciseTime;

export default class UpdateTable extends Component {
  render(){
    const getTableName = () => {
      const array = this.props.route.split('/');
      const table = array[array.length - 3];
      const exercise = array[array.length - 1];
      this.state = {table: table, exercise: exercise};
    };

    const handleUpdate = (e) => {
      e.preventDefault();
      const table = this.state.table;
      const name = this.state.exercise;
      const newName = exerciseNewName.value;
      const type = exerciseType.value;
      const time = exerciseTime.value;
      const calories = exerciseCalories.value;
      this.props.updateTable({table, name, newName, calories, type, time});
      clearFields();
      return false;
    };

    const clearFields = () => {
      exerciseNewName.value = '';
      exerciseNewName.placeholder="Nuevo nombre...";
      exerciseType.value = '';
      exerciseType.placeholder="Nuevo tipo...";
      exerciseTime.value = '';
      exerciseTime.placeholder="Nuevo tiempo...";
      exerciseCalories.value = '';
      exerciseCalories.placeholder="Nuevas calorías quemadas...";
      return false;
    };

    return(
      <div className="panel panel-default">
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
              <input
                type="text"
                className="form-control"
                id="exerciseType"
                placeholder="Nuevo tipo..."
                ref={(i) => { exerciseType = i; }}
              />
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
