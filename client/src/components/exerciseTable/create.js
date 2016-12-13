import React, {Component, PropTypes} from 'react';

let createExerciseTable;

export default class CreateExerciseTable extends Component {

  render(){
    const handleCreateExerciseTable = (e) => {
      e.preventDefault();
      const name = createExerciseTable.value;
      this.props.createExerciseTable({name});
      return false;
    }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Crear tabla de ejercicios
        </div>
        <div className="panel-body">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="createExerciseTable"
              placeholder="Nombre de la tabla..."
              ref={(i) => { createExerciseTable = i; }}
            />
          </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <button type="submit" className="btn btn-default" onClick={handleCreateExerciseTable}>
              Nueva tabla
            </button>
          </form>
        </div>
      </div>
      );
    }
  }
