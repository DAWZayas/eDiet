// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {getTablesAction, createTableAction, deleteTableAction, updateTableAction, addObservable, removeObservable} from '../../store/actions';
import Tables from '../../components/tables';

const mapStateToProps = (state) => ({
   tables: state.tables.tables,
   status: state.tables.status,
   hasMore: state.tables.hasMore,
   loadingMore: state.tables.status === 'loading',
 });

 const mapDispatchToProps = (dispatch) => ({
   getTables: payload => dispatch(getTablesAction(payload)),
   createTable: payload => dispatch(createTableAction(payload)),
   deleteTable: payload => dispatch(deleteTableAction(payload)),
   updateTable: payload => dispatch(updateTableAction(payload)),
   getCreateTable: payload => dispatch(getCreateTable(payload)),
   addObservable: observable => dispatch(addObservable(observable)),
   removeObservable: observable => dispatch(removeObservable(observable)),
 });

const tableActions = ({ tables, status, getTables, createTable, deleteTable, updateTable, hasMore, loadingMore, getCreateTable, addObservable, removeObservable }) => {
  return (
    <div className="container">
      <Tables
        tables={tables}
        getTables={getTables}
        createTable={createTable}
        deleteTable={deleteTable}
        updateTable={updateTable}
        status={status}
        hasMore={hasMore}
        loadingMore={loadingMore}
        getCreateTable={getCreateTable}
        addObservable={addObservable}
        removeObservable={removeObservable}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(tableActions);
