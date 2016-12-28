import React, {Component} from 'react';

let tableId;
let oldName;
let nextName;
let newCalories;
let newType;
let newTime;

export default class UpdateExercise extends Component {
  render () {
    const handleUpdateExercise = (e) => {
      e.preventDefault();
      const id = tableId.value;
      const name = oldName.value;
      const newName = nextName.value;
      const calories = newCalories.value;
      const type = newType.value;
      const time = newTime.value;
      this.props.updateExercise({id, name, newName, calories, type, time})
      return false;
    };

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Actualizar ejercicio
        </div>
        <div className="panel-body">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="tableId"
              placeholder="ID de la tabla..."
              ref={(i) => { tableId = i; }}
            />
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="oldName"
              placeholder="Nombre..."
              ref={(i) => { oldName = i; }}
            />
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="nextName"
              placeholder="Nuevo nombre..."
              ref={(i) => { nextName = i; }}
            />
        </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="newCalories"
              placeholder="Nuevas calorias..."
              ref={(i) => { newCalories = i; }}
            />
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="newType"
              placeholder="Nuevo tipo..."
              ref={(i) => { newType = i; }}
            />
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="newTime"
              placeholder="Nuevo tiempo..."
              ref={(i) => { newTime = i; }}
            />
          </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <button type="submit" className="btn btn-default" onClick={handleUpdateExercise}>
              Actualizar
            </button>
          </form>
        </div>
      </div>
    );
  }

}
