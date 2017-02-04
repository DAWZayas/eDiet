import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {deleteUserAction, logoutAction} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  navToLogin: () => dispatch(push('/login')),
  deleteUser: payload => dispatch(deleteUserAction(payload)),
  logOut: () => dispatch(logoutAction())
});

const deleteUser = ({deleteUser, id, logOut, navToLogin}) => {
  const handleDeleteUser = (e) => {
    e.preventDefault();
    deleteUser({id});
    logOut();
    navToLogin();
   };

  return (
    <div>
      <button className="btn btn-default" onClick={handleDeleteUser}>
        Delete user
      </button>
    </div>

  );
}

export default connect (null, mapDispatchToProps)(deleteUser);
