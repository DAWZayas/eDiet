import React from 'react';
import {connect} from 'react-redux';

import {updatePasswordAction} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  updatesPassword: payload => dispatch(updatePasswordAction(payload)),
});

const updatePassword = ({updatesPassword, id}) => {
  let newsPassword;
  let newPassword;

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    const password = newsPassword.value;
    const passwordRepeat = newPassword.value;
    updatesPassword({password, passwordRepeat, id});
  };

  const style = {
    marginTop: '2%',
  };

  return (
      <div className="panel panel-default" style={style}>
        <div className="panel-heading">
          <p> Update password </p>
        </div>
        <div className="panel-footer">
          <input className="input-group"
            type="text"
            className="form-control"
            id="newName"
            placeholder="Enter your new password..."
            ref={(i) => { newsPassword = i; }}
          />
          <br/>
          <span className="input-group">
            <input className="input-group-addon"
              type="text"
              className="form-control"
              id="newName"
              placeholder="Enter your new password..."
              ref={(i) => {newPassword= i; }}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default " onClick={handleUpdatePassword}>yes</button>
            </span>
          </span>
        </div>
      </div>
  );
}

export default connect (null, mapDispatchToProps)(updatePassword);
