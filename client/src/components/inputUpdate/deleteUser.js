import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Modal from '../modals/deleteUser';

const styles = require('./style.scss');

import {deleteUserAction, logoutAction} from '../../store/actions';
import ModalDelete from '../modalUpdateUser/modalDelete';

const mapDispatchToProps = (dispatch) => ({
  navToLogin: () => dispatch(push('/login')),
  deleteUser: payload => dispatch(deleteUserAction(payload)),
  logOut: () => dispatch(logoutAction())
});

const deleteUser = ({deleteUser, id, logOut, navToLogin}) => {
  return (
    <div>
      <center>
        <ModalDelete id={id} deleteUser={deleteUser} logOut={logOut} navToLogin={navToLogin} />
      </center>
    </div>

  );
}

export default connect (null, mapDispatchToProps)(deleteUser);
