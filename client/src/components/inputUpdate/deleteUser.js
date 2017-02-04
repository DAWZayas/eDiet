import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Modal from '../modals/deleteUser';

const styles = require('./style.scss');

import {deleteUserAction, logoutAction} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  navToLogin: () => dispatch(push('/login')),
  deleteUser: payload => dispatch(deleteUserAction(payload)),
  logOut: () => dispatch(logoutAction())
});

const deleteUser = ({deleteUser, id, logOut, navToLogin}) => {
  return (
    <div className={`${styles.deleteButton}`}>
      <p>Borrar cuenta de usuario: </p>
      <Modal
        deleteUser={deleteUser}
        id={id}
        logOut={logOut}
        navToLogin={navToLogin}
      />
    </div>

  );
}

export default connect (null, mapDispatchToProps)(deleteUser);
