import React, {Component, PropTypes} from 'react';

let tableName;
let exerciseName;
let exerciseCalories;
let exerciseType;
let exerciseTime;

export default class CreateExercise extends Component {

  render(){
    const handleCreate = (e) => {
      e.preventDefault();
      this.props.createExercise({
        tName: tableName.value,
        name: exerciseName.value,
        calories: exerciseCalories.value,
        type: exerciseType.value,
        time: exerciseTime.value,
      });
      clearFields();
      return false;
    }

    const clearFields = () => {
      tableName.value = '';
      tableName.placeholder="Nombre de la tabla...";
      exerciseName.value = '';
      exerciseName.placeholder="Nombre del ejercicio...";
      exerciseCalories.value = '';
      exerciseCalories.placeholder="Calorias quemadas...";
      exerciseType.value = '';
      exerciseType.placeholder="Tipo de ejercicio...";
      exerciseTime.value = '';
      exerciseTime.placeholder="Duración...";
      return false;
    };

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Crear ejercicio
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
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="exerciseCalories"
              placeholder= "Calorias quemadas..."
              ref={(i) => { exerciseCalories = i; }}
            />
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="exerciseType"
              placeholder= "Tipo de ejercicio..."
              ref={(i) => { exerciseType = i; }}
            />
          </div>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="exerciseTime"
              placeholder= "Duración..."
              ref={(i) => { exerciseTime = i; }}
            />
          </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <button type="submit" className="btn btn-default" onClick={handleCreate}>
              Crear
            </button>
          </form>
        </div>
      </div>
      );
    }
  }
