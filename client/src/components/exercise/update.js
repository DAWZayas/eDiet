import React, {Component} from 'react';

let tableName;
let oldName;
let nextName;
let newCalories;
let newType;
let newTime;

export default class UpdateExercise extends Component {
  render () {
    const handleUpdate = (e) => {
      e.preventDefault();
      const tName = tableName.value;
      const name = oldName.value;
      const newName = nextName.value;
      const calories = newCalories.value;
      const type = newType.value;
      const time = newTime.value;
      this.props.updateExercise({tName, name, newName, calories, type, time});
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
              id="tableName"
              placeholder="Nombre de la tabla..."
              ref={(i) => { tableName = i; }}
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
            <button type="submit" className="btn btn-default" onClick={handleUpdate}>
              Actualizar
            </button>
          </form>
        </div>
      </div>
    );
  }

}
