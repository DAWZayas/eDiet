import React from 'react';
import {connect} from 'react-redux';

import {updateMailAction} from '../../store/actions';
import ModalUpdateMail from '../modalUpdateUser/modalMail';

const styles = require('./style.scss');
const style = {
  header: {
    borderBottom: 'none',
    backgroundColor: 'rgba(232, 142, 58, 0.33)',
  },
  panel: {
    margin: '5% 0 0 0',
  },
};

const mapDispatchToProps = (dispatch) => ({
  updateMails: payload => dispatch(updateMailAction(payload)),
});

const updateMail = ({updateMails, id}) => {
  let newEmail;

  const mail = () =>{
    const email = newEmail.value;
    return email;
  };

  return (
    <div className="panel panel-default" style={style.panel}>
      <div className="panel-heading" style={style.header}>
        <p>
          Update Email
        </p>
      </div>
      <div className={`panel-body ${styles.body}`}>
        <div className="col-sm-12">
          <input
            type="email"
            className="form-control"
            id="newEmail"
            placeholder="New email..."
            ref={(i) => { newEmail = i; }}
          />
        </div>
        <center>
          <ModalUpdateMail id={id} email={mail} update={updateMails} />
        </center>
      </div>
    </div>
  );
}

export default connect (null, mapDispatchToProps)(updateMail);
