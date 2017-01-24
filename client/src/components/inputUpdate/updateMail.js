import React from 'react';
import {connect} from 'react-redux';

import {updateMailAction} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  updateMails: payload => dispatch(updateMailAction(payload)),
});

const updateMail = ({updateMails, id}) => {
  let newEmail;

  const handleUpdateMail = (e) => {
    e.preventDefault();
    const email = newEmail.value;
    updateMails({id, email});
  };

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <p> Update Mail </p>
      </div>
      <div className="panel-footer">
        <span className="input-group">
          <input className="input-group-addon"
            type="text"
            className="form-control"
            id="newName"
            placeholder="Enter your new mail..."
            ref={(i) => {newEmail= i; }}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default " onClick={handleUpdateMail}>yes</button>
          </span>
        </span>
      </div>
    </div>
  );
}

export default connect (null, mapDispatchToProps)(updateMail);
