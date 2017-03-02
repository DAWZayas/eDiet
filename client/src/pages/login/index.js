// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Google from '../../components/google';

// our packages
import {loginAction} from '../../store/actions';
import FacebookButton from '../../components/facebook';
const style = require('./style.scss');

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: params => dispatch(loginAction(params)),
  navToHome: () => dispatch(push('/')),
});

const Login = ({onLoginClick, navToHome, token}) => {
  let usernameInput;
  let passwordInput;

  const handleClick = (e) => {
    e.preventDefault();

    onLoginClick({
      login: usernameInput.value,
      password: passwordInput.value,
    });
  };

  if (token) {
    // TODO: figure out a better way to do nav
    setImmediate(() => navToHome());
  }

  return (
    <div className={`container ${style.container}`}>
      <h3 className={`${style.h3} ${style.title}`}>Please Log In, or <Link to="/register">Sign Up</Link></h3>
      <div className="row">
        <div className={`main ${style.main}`}>
          <div className="row">
            <FacebookButton />
            <Google />
          </div>
          <div className={`login-or ${style.login}`}>
            <hr className={`hr-or ${style.hr}`} />
            <span className={`span-or ${style.span}`}>or</span>
          </div>

          <form role="form">
            <div className="form-group">
              <label htmlFor="inputUsername" className={`${style.label}`}>Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  placeholder="Username"
                  ref={(i) => { usernameInput = i; }}
                />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className={`${style.label}`}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  ref={(i) => { passwordInput = i; }}
                />
            </div>
            <button type="submit" className={`btn ${style.loginButton}`} onClick={handleClick}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
