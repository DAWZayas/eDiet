import React, {Component, PropTypes} from 'react';

let tableName;
let tableLevel;

export default class CreateExerciseTable extends Component {

  render(){
    const handleCreate = (e) => {
      e.preventDefault();
      const name = tableName.value;
      const level = tableLevel.value;
      this.props.createExerciseTable({name, level});
      clearFields();
      return false;
    };

    const clearFields = () => {
      tableName.value = '';
      tableName.placeholder="Nombre de la tabla...";
      tableLevel.value = '';
      tableLevel.placeholder="Nivel de la tabla...";
      return false;
    };

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
              id="tableName"
              placeholder="Nombre de la tabla..."
              ref={(i) => { tableName = i; }}
            />
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="tableLevel"
              placeholder="Nivel de la tabla..."
              ref={(i) => { tableLevel = i; }}
            />
          </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <button type="submit" className="btn btn-default" onClick={handleCreate}>
              Nueva tabla
            </button>
          </form>
        </div>
      </div>
      );
    }
  }
