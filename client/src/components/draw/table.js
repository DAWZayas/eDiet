import React, {Component} from 'react';
import DeleteModal from '../modals/tableDeleteModal';
import UpdateTable from '../updateTable';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {registerTableObservable} from '../../store/realTime';
import {getCreateTable, addObservable, removeObservable} from '../../store/actions';

const styles = require('../tables/style.scss');

const mapDispatchToProps = dispatch => ({
  addObservable: observable => dispatch(addObservable(observable)),
  removeObservable: observable => dispatch(removeObservable(observable)),
});

class Table extends React.Component{
  constructor(props){
    super(props);
    const {payload: observable} = this.props.addObservable(registerTableObservable(this.props.obj));
    this.state={observable};
  }
  componentWillUnmount() {
    const {removeObservable} = this.props;
    const {observable} = this.state;
    removeObservable(observable);
  }

  render(){
    const {obj, index, deleteTable} = this.props;

    return (
      <div key={index} className={`${styles.body}`}>
        <ul>
          <li>
            <div>
              <DeleteModal deleted={obj} deleteTable={deleteTable} />
              <button className="btn btn-default">
                <Link to={`/tables/update/${obj.name}`} className={`${styles.updateButton}`} >
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
}
export default connect(null, mapDispatchToProps)(Table);
