// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {registerAction} from '../../store/actions';
const style = require('./style.scss');

const mapStateToProps = state => ({
  redirectToLogin: state.auth.redirectToLogin,
});

const mapDispatchToProps = dispatch => ({
  navToLogin: () => dispatch(push('/login')),
  onRegisterClick: params => dispatch(registerAction(params)),
});

const Register = ({onRegisterClick, navToLogin, redirectToLogin}) => {
  let usernameInput;
  let passwordInput;
  let passwordInputRepeat;

  const handleClick = (e) => {
    e.preventDefault();

    onRegisterClick({
      login: usernameInput.value,
      password: passwordInput.value,
      passwordRepeat: passwordInputRepeat.value,
    });
  };

  if (redirectToLogin) {
    // TODO: figure out a better way to do nav
    setImmediate(() => navToLogin());
  }

  return (
    <div className={`container ${style.container}`}>
      <h3 className={`${style.h3} ${style.title}`}>Please Sign Up, or <Link to="/login">Log In</Link></h3>
      <div className="row">
        <div className={`main ${style.main}`}>
          <form role="form">
            <div className="form-group">
              <label htmlFor="inputUsername">Username:</label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                placeholder="Username"
                ref={(i) => { usernameInput = i; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password:</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                ref={(i) => { passwordInput = i; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordRepeat"
                  placeholder="Repeat password"
                  ref={(i) => { passwordInputRepeat = i; }}
                />
            </div>
            <button type="submit" className={`btn ${style.registerButton}`} onClick={handleClick}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
