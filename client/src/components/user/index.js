import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {updateUserAction} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  updateUser: payload => dispatch(updateUserAction(payload)),
 });

class user extends React.Component {
  constructor (props) {
    super(props);
  };

  render(){
    const handleUpdateUser = (e) => {
      e.preventDefault();
      const passwordRepeat = passwordRepeatUser.value;
      const password = passwordUser.value;
      const email = emailUser.value;
      const height = heightUser.value;
      const id = this.props.user.id;
      this.props.updateUser({passwordRepeat, password, email, height, id});

    };

    let passwordRepeatUser;
    let passwordUser;
    let emailUser;
    let heightUser;

    return(
      <div className="jumbotron">
        <input className="input-group"
          type="password"
          className="form-control"
          id="newName"
          placeholder="Enter your new password..."
          ref={(i) => {passwordRepeatUser = i; }}
        />
        <br/>
        <input className="input-group"
          type="password"
          className="form-control"
          id="newName"
          placeholder="Enter your new password repeat..."
          ref={(i) => { passwordUser = i; }}
        />
        <br/>
        <input className="input-group"
          type="text"
          className="form-control"
          id="newName"
          placeholder="Enter your new email..."
          ref={(i) => { emailUser = i; }}
        />
        <br/>
        <span className="input-group">
        <input className="input-group-addon"
          type="text"
          className="form-control"
          id="newName"
          placeholder="Enter your new menu height..."
          ref={(i) => { heightUser = i; }}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default " onClick={handleUpdateUser}>change</button>
        </span>
      </span>
      </div>
    );
  }
}

export default connect (null, mapDispatchToProps)(user)
