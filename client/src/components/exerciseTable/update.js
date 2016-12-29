import React, {Component} from 'react';

let tableId;
let newName;
let newLevel;

export default class UpdateExerciseTable extends Component {
  render () {
    const handleUpdateExerciseTable = (e) => {
      e.preventDefault();
      const id = tableId.value;
      const name = newName.value;
      const level = newLevel.value;
      this.props.updateExerciseTable({id, name, level})
      return false;
    };

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Actualizar tabla de ejercicios
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
          <br/><br/><br/>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="newName"
              placeholder="Nuevo nombre..."
              ref={(i) => { newName = i; }}
            />
          </div>
          <br/><br/><br/>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="newLevel"
              placeholder="Nuevo nivel..."
              ref={(i) => { newLevel = i; }}
            />
          </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <button type="submit" className="btn btn-default" onClick={handleUpdateExerciseTable}>
              Actualizar tabla
            </button>
          </form>
        </div>
      </div>
    );
  }

}
