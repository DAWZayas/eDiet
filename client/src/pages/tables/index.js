// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getTablesAction, createTableAction, deleteTableAction, updateTableAction} from '../../store/actions';
import Tables from '../../components/tables';

const mapStateToProps = (state) => ({
   tables: state.tables.tables,
   status: state.tables.status,
 });

 const mapDispatchToProps = (dispatch) => ({
   getTables: _.once(() => dispatch(getTablesAction())),
   createTable: payload => dispatch(createTableAction(payload)),
   deleteTable: payload => dispatch(deleteTableAction(payload)),
   updateTable: payload => dispatch(updateTableAction(payload)),
 });

const tableActions = ({ tables, status, getTables, createTable, deleteTable, updateTable }) => {
  getTables();
  return (
    <div className="container">
      <Tables
        tables={tables}
        getTables={getTables}
        createTable={createTable}
        deleteTable={deleteTable}
        updateTable={updateTable}
        status={status}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(tableActions);
