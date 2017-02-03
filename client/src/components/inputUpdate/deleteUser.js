import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {deleteUserAction} from '../../store/actions';

const mapStateToProps = state => ({
  redirectToLogin: state.user.navToLogin
});

const mapDispatchToProps = (dispatch) => ({
  navToLogin: () => dispatch(push('/login')),
  deleteUser: payload => dispatch(deleteUserAction(payload)),
});

const deleteUser = ({deleteUser, id, redirectToLogin, navToLogin}) => {
  console.log('>>>Nav', navToLogin)
  const handleDeleteUser = (e) => {
    e.preventDefault();
    deleteUser({id});
   };

  if(redirectToLogin){
    navToLogin();
  }

  return (
    <div>
      <button className="btn btn-default" onClick={handleDeleteUser}>
        Delete user
      </button>
    </div>

  );
}

export default connect (mapStateToProps, mapDispatchToProps)(deleteUser);
