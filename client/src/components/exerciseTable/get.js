import React, {Component} from 'react';
import {Spinner} from '../spinner';
import {drawTable} from '../../util';

let tName;
let filter;

export default class Get extends Component {
  constructor(props){
    super(props);
    this.state = {exerciseTable: null}
  }

  render(){
    const handleGet = e => {
      e.preventDefault();
      const name = tName.value;
      const filter = this.props.exerciseTable.filter(obj => obj.name === name);
      this.setState({exerciseTable: filter});
    };

    const handleGetAll = e => {
      e.preventDefault();
      this.setState({exerciseTable: null});
    };

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          Tablas
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <div className="input-group">
              <input className="input-group-addon"
                type="text"
                className="form-control"
                id="tName"
                placeholder="Nombre de la tabla..."
                ref={(i) => { tName = i; }}
              />
              <span className="input-group-btn" >
                <button type="submit" className="btn btn-default " onClick={handleGet}>
                  Ver
                </button>
              </span>
              <span className="input-group-btn" >
                <button type="submit" className="btn btn-default " onClick={handleGetAll}>
                  Ver todas
                </button>
              </span>
            </div>
          </form>
        </div>
        <div className="panel-body">
          {
            /loading/.test(this.props.status) ?
            <Spinner /> :
            this.state.exerciseTable ? drawTable(this.state.exerciseTable) : drawTable(this.props.exerciseTable)
          }
        </div>
      </div>
    );
  }
}
