import React from 'react';
import {connect} from 'react-redux';

import {updatePasswordAction} from '../../store/actions';

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

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    const password = newPassword.value;
    const passwordRepeat = newPasswordRepeat.value;
    updatesPassword({password, passwordRepeat, id});
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
        <button type="submit" className="btn btn-default" onClick={handleUpdatePassword}>
          Update
        </button>
      </div>
    </div>
  );
}

export default connect (null, mapDispatchToProps)(updatePassword);
