import React, {Component} from 'react';

let tableName;
let exerciseName;

export default class DeleteExercise extends Component {
  render () {
    const handleDelete= (e) => {
      e.preventDefault();
      const tName = tableName.value;
      const name = exerciseName.value;
      this.props.deleteExercise({tName, name})
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
              id="tableName"
              placeholder="Nombre de la tabla..."
              ref={(i) => { tableName = i; }}
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
            <button type="submit" className="btn btn-default" onClick={handleDelete}>
              Borrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
