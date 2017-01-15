import React, {Component} from 'react';
import {Route} from 'react-router';
import {Spinner} from '../spinner';
import DeleteModal from '../modals/tableDeleteModal';
import UpdateTable from '../updateTable';
import {Link} from 'react-router';

const styles = require('./style.scss');
// ${styles. }

export default class Get extends Component {
  render(){
    return(
      <div className="panel panel-default">
          <div className={`panel-heading ${styles.header}`}>
            <p>
              Tablas
            </p>
            <button className={"btn btn-default"}>
              <Link to="/tables/addTable">
                <i className="fa fa-plus" aria-hidden="true"></i>
                Tabla
              </Link>
            </button>
          </div>
            {
              this.props.status === 'loading' ?
                <Spinner />
              :
              <div className={"panel-body"}>
              {this.props.tables.length === 0 ?
                <p>Sin tablas</p>
              :
                this.props.tables.map((obj, index) =>
                  <div key={index} className={`${styles.body}`}>
                    <ul>
                      <li>
                        <div>
                          <DeleteModal deleted={obj} deleteTable={this.props.deleteTable} />
                          <button className="btn btn-default">
                            <Link to={`/tables/update/${obj.name}`} >
                              <i className="fa fa-pencil" aria-hidden="true"></i>
                            </Link>
                          </button>
                        </div>
                        <p>
                          <Link to={`/tables/${obj.name}`}>
                            {obj.name}
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                )
              }
              </div>
            }
      </div>
    );
  }
}
