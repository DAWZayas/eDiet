import React, {Component} from 'react';

let tableName;
let nName;
let newLevel;

export default class UpdateExerciseTable extends Component {
  constructor(props){
      super(props);
      this.state = {desplegate: true};
  };

  render () {
    const handleUpdate = (e) => {
      e.preventDefault();
      const name = tableName.value;
      const newName = nName.value;
      const level = newLevel.value;
      this.props.updateExerciseTable({name, newName, level});
      clearFields();
      return false;
    };

    const clearFields = () => {
      tableName.value = '';
      tableName.placeholder="Nombre de la tabla...";
      nName.value = '';
      nName.placeholder="Nuevo nombre...";
      newLevel.value = '';
      newLevel.placeholder="Nuevo nivel...";
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
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="nName"
                  placeholder="Nuevo nombre..."
                  ref={(i) => { nName = i; }}
                />
              </div>
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
