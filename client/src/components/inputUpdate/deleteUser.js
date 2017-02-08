import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

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
    <div className={`container ${styles.deleteDiv}`}>
      <h4>
        Do you want to delete your count?
        <br/>
        <small>
          (It is not reversible)
        </small>
      </h4>
      <ModalDelete id={id} deleteUser={deleteUser} logOut={logOut} navToLogin={navToLogin} />
    </div>

  );
}

export default connect (null, mapDispatchToProps)(deleteUser);
