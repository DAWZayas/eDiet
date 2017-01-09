import React, {Component} from 'react';
import {drawExercise, drawExercises} from '../../util';
import {Spinner} from '../spinner';

let tableName;
let exerciseName;

export default class Get extends Component {
  constructor(props){
    super(props);
    this.state = {exercises: null, desplegate: true};
  }

render(){
  console.log('>>>PROPS', this.props);

  const handleGet = e => {
    e.preventDefault();
    const tName = tableName.value;
    const eName = exerciseName.value;
    const table = this.props.exercises.filter(table => table.name === tName).reduce((a, b) => a.concat(b));
    const exercise = table.exercises.filter(exercise => exercise.name === eName).reduce((a, b) => a.concat(b));
    clearFields();
    this.setState({exercises: exercise});
  };

  const handleGetAll = e => {
    e.preventDefault();
    this.setState({exercises: null});
  };

  const handleDesplegate = (e) => {
    e.preventDefault();
    this.setState({desplegate: !this.state.desplegate});
  };

  const clearFields = () => {
    tableName.value = '';
    tableName.placeholder="Nombre de la tabla...";
    exerciseName.value = '';
    exerciseName.placeholder="Nombre del ejercicio...";
    return false;
  };

  return(
    <span>
      {
        this.state.desplegate ?
        <div className="panel panel-default">
            <div className="panel-heading">
            <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-minus" role="button"/>
            Ejercicios
          </div>
          <div className="panel-body">
            <div className="col-sm-12">
              <input className="input-group-addon"
                type="text"
                className="form-control"
                id="tableName"
                  placeholder="Nombre de la tabla..."
                ref={(i) => { tableName = i; }}
              />
            </div>
            <div className="col-sm-12">
              <input className="input-group-addon"
                type="text"
                className="form-control"
                id="exerciseName"
                placeholder="Nombre del ejercicio..."
                ref={(i) => { exerciseName = i; }}
              />
            </div>
          </div>
          <div className="panel-footer">
            <button type="submit" className="btn btn-default " onClick={handleGet}>
              Ver
            </button>
            <button type="submit" className="btn btn-default " onClick={handleGetAll}>
              Ver todos
            </button>
          </div>
          <div className="panel-body">
            {
              /loading/.test(this.props.status) ?
              <Spinner /> :
              this.state.exercises === null ? drawExercises(this.props.exercises) :  drawExercise(this.state.exercises)
              // drawExercises(this.props.exercises) : drawExercise(this.state.exercises)
            }
          </div>

          </div>

          :

          <div className="panel panel-default">
            <div className="panel-heading">
              <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-plus" role="button"/>
              Ejercicios
            </div>
          </div>
        }
      </span>
    );
  }
}
