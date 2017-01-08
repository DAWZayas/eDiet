import React, {Component} from 'react';

let tableName;
let oldName;
let nextName;
let newCalories;
let newType;
let newTime;

export default class UpdateExercise extends Component {
  constructor(props){
      super(props);
      this.state = {desplegate: true};
  };

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
      clearFields();
      return false;
    };

    const clearFields = () => {
      tableName.value = '';
      tableName.placeholder="Nombre de la tabla...";
      oldName.value = '';
      oldName.placeholder="Nombre del ejercicio...";
      nextName.value = '';
      nextName.placeholder="Nuevo nombre...";
      newCalories.value = '';
      newCalories.placeholder="Nuevas calorias...";
      newType.value = '';
      newType.placeholder="Nuevo tipo...";
      newTime.value = '';
      newTime.placeholder="Nueva duración...";
      return false;
    };

    const handleDesplegate = (e) => {
      e.preventDefault();
      this.setState({desplegate: !this.state.desplegate});
    };

    return (
      <span>
        {
          this.state.desplegate ?
          <div className="panel panel-default">
            <div className="panel-heading">
              <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-minus" role="button"/>
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
          :
          <div className="panel panel-default">
            <div className="panel-heading">
              <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-plus" role="button"/>
              Actualizar tabla de ejercicios
            </div>
          </div>
        }
      </span>
    );
  }

}
