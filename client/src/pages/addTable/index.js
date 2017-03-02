// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {createTableAction} from '../../store/actions';
import AddTable from '../../components/addTable';

const styles = require('./styles.scss');

const mapStateToProps = (state) => ({
   tables: state.tables.tables,
   route: state.routing.locationBeforeTransitions.pathname,
 });

 const mapDispatchToProps = (dispatch) => ({
   createTable: payload => dispatch(createTableAction(payload)),
 });

const create = ({ tables, createTable }) => {
  return (
    <div className="container">
      <AddTable
        tables={tables}
        createTable={createTable}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(create);
