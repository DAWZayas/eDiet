import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateMailAction} from '../../store/actions';
import ModalUpdateMail from '../modalUpdateUser/modalMail';

const styles = require('./style.scss');

const mapDispatchToProps = (dispatch) => ({
  updateMails: payload => dispatch(updateMailAction(payload)),
});

class updateMail extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {updateMails, user} = this.props
    let newEmail;

    const mail = () =>{
      const email = newEmail.value;
      return email;
    };

    return (
      <div className={`${styles.element}`}>
        <h2>Email</h2>
        <div>
          <div className="col-xs-12">
            <input
              type="email"
              className="form-control"
              id="newEmail"
              placeholder="New email..."
              value={user.email ? user.email : 'No email'}
              ref={(i) => { newEmail = i; }}
            />
          </div>
          <center>
            <ModalUpdateMail id={user.id} email={mail} update={updateMails} />
          </center>
        </div>
      </div>
    );
  }
}

export default connect (null, mapDispatchToProps)(updateMail);
