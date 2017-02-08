import React from 'react';
import {connect} from 'react-redux';

import {updatePasswordAction} from '../../store/actions';
import ModalUpdatePassword from '../modalUpdateUser/modalPassword';

const styles = require('./style.scss');
const style = {
  header: {
    borderBottom: 'none',
    backgroundColor: 'rgba(232, 142, 58, 0.33)',
  },
  panel: {
    margin: '5% 0 0 0',
  },
  input: {
    margin: '2% 0 0 0',
  }
};

const mapDispatchToProps = (dispatch) => ({
  updatesPassword: payload => dispatch(updatePasswordAction(payload)),
});

const updatePassword = ({updatesPassword, id}) => {
  let newPassword;
  let newPasswordRepeat;

  const password = () => {
     const  password = newPassword.value;
     return password;
  };

  const passwordRepeat = () => {
    const passwordRepeat = newPasswordRepeat.value;
    return passwordRepeat;
  };


  return (
    <div className="panel panel-default" style={style.panel}>
      <div className="panel-heading" style={style.header}>
        <p>
          Update Password
        </p>
      </div>
      <div className={`panel-body ${styles.body}`}>
        <div className="col-sm-12">
          <input
            type="password"
            className="form-control"
            style={style.input}
            id="newPassword"
            placeholder="New password..."
            ref={(i) => { newPassword = i; }}
          />
          <input
            type="password"
            className="form-control"
            style={style.input}
            id="newPassword"
            placeholder="Repeat password..."
            ref={(i) => { newPasswordRepeat = i; }}
          />
        </div>
        <center>
          <ModalUpdatePassword update={updatesPassword} password={password} passwordRepeat={passwordRepeat} id = {id}/>
        </center>
      </div>
    </div>
  );
}

export default connect (null, mapDispatchToProps)(updatePassword);
