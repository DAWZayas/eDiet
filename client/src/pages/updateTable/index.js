// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {updateTableAction} from '../../store/actions';
import UpdateTable from '../../components/updateTable';

const styles = require('./styles.scss');

const mapStateToProps = (state) => ({
   tables: state.tables.tables,
   route: state.routing.locationBeforeTransitions.pathname,
 });

 const mapDispatchToProps = (dispatch) => ({
   updateTable: payload => dispatch(updateTableAction(payload)),
 });

const update = ({ tables, updateTable, route }) => {
  return (
    <div className="container">
      <h1 className={`${styles.title}`}>Update the table</h1>
      <UpdateTable
        tables={tables}
        updateTable={updateTable}
        route={route}
      />
    </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(update);
