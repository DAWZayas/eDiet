import React, {Component} from 'react';

let tableName;
let nName;
let newLevel;

export default class UpdateExerciseTable extends Component {
  render () {
    const handleUpdate = (e) => {
      e.preventDefault();
      const name = tableName.value;
      const newName = nName.value;
      const level = newLevel.value;
      this.props.updateExerciseTable({name, newName, level})
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
              id="tableName"
              placeholder="Nombre de la tabla..."
              ref={(i) => { tableName = i; }}
            />
          </div>
          <br/><br/><br/>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="nName"
              placeholder="Nuevo nombre..."
              ref={(i) => { nName = i; }}
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
            <button type="submit" className="btn btn-default" onClick={handleUpdate}>
              Actualizar tabla
            </button>
          </form>
        </div>
      </div>
    );
  }

}
