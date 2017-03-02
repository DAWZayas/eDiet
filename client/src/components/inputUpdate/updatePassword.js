import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updatePasswordAction} from '../../store/actions';
import ModalUpdatePassword from '../modalUpdateUser/modalPassword';

const styles = require('./style.scss');

const mapDispatchToProps = (dispatch) => ({
  updatesPassword: payload => dispatch(updatePasswordAction(payload)),
});

class updatePassword extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {updatesPassword, user} = this.props
    let newPassword;
    let newPasswordRepeat;

    const password = () => {
      const password = newPassword.value;
      return password;
    };

    const passwordRepeat = () => {
      const passwordRepeat = newPasswordRepeat.value;
      return passwordRepeat;
    };

    return (
      <div className={`${styles.element}`}>
        <h2>Height</h2>
        <div>
          <div className="col-xs-12">
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="New password..."
              ref={(i) => { newPassword = i; }}
            />
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Repeat password..."
              ref={(i) => { newPasswordRepeat = i; }}
            />
          </div>
          <center>
            <ModalUpdatePassword update={updatesPassword} password={password} passwordRepeat={passwordRepeat} id = {user.id}/>
          </center>
        </div>
      </div>
    );
  }
}

export default connect (null, mapDispatchToProps)(updatePassword);
