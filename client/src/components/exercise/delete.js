import React, {Component} from 'react';

let tableId;
let exerciseName;

export default class DeleteExercise extends Component {
  render () {
    const handleDeleteExercise = (e) => {
      e.preventDefault();
      const id = tableId.value;
      const name = exerciseName.value;
      this.props.deleteExercise({id, name})
      return false;
    };

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Borrar ejercicio
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
              id="exerciseName"
              placeholder="Nombre del ejercicio..."
              ref={(i) => { exerciseName = i; }}
            />
          </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <button type="submit" className="btn btn-default" onClick={handleDeleteExercise}>
              Borrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
