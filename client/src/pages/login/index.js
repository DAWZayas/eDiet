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
  let rememberInput;

  const handleClick = (e) => {
    e.preventDefault();

    onLoginClick({
      login: usernameInput.value,
      password: passwordInput.value,
      remember: rememberInput.checked,
    });
  };

  if (token) {
    // TODO: figure out a better way to do nav
    setImmediate(() => navToHome());
  }

  return (
    <div className={`container ${style.container}`}>
      <div className="row">
        <div className={`main ${style.main}`}>
          <h3 className={`${style.h3}`}>Please Log In, or <Link to="/register">Sign Up</Link></h3>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <FacebookButton />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <a href="#" className="btn btn-lg btn-danger btn-block">Google</a>
            </div>
            <Google />
          </div>
          <div className={`login-or ${style.login}`}>
            <hr className={`hr-or ${style.hr}`} />
            <span className={`span-or ${style.span}`}>or</span>
          </div>

          <form role="form">
            <div className="form-group">
              <label htmlFor="inputUsername">Username or email</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  placeholder="Username"
                  ref={(i) => { usernameInput = i; }}
                />
            </div>
            <div className="form-group">
              <a className="pull-right" href="#">Forgot password?</a>
              <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  ref={(i) => { passwordInput = i; }}
                />
            </div>
            <div className="checkbox pull-right">
              <label htmlFor="inputRemember">
                <input
                  type="checkbox"
                  id="inputRemember"
                  ref={(i) => { rememberInput = i; }}
                /> Remember me
               </label>
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
