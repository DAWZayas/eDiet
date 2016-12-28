import React, {Component, PropTypes} from 'react';

let tableId;
let exerciseName;
let exerciseCalories;
let exerciseType;
let exerciseTime;

export default class CreateExercise extends Component {

  render(){
    const handleCreateExercise = (e) => {
      e.preventDefault();
      const id = tableId.value;
      const name = exerciseName.value;
      const calories = exerciseCalories.value;
      const type = exerciseType.value;
      const time = exerciseTime.value;
      this.props.createExercise({id, name, calories, type, time});
      return false;
    }

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
              id="tableId"
              placeholder="Id de la tabla..."
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
          <br/><br/><br/>
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
            <button type="submit" className="btn btn-default" onClick={handleCreateExercise}>
              Crear
            </button>
          </form>
        </div>
      </div>
      );
    }
  }