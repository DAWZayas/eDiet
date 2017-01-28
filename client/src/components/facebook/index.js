// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our packages
import {facebookLoginAction} from '../../store/actions';
import {popupwindow} from '../../util';

const mapDispatchToProps = dispatch => ({
  handleFacebookLogin: payload => dispatch(facebookLoginAction(payload)),
});

const authUrl = 'http://localhost:8080/api/facebook/login';

let authWindow = null;

const authorize = () => {
  if (authWindow) {
    return Promise.resolve({
      error: 'Waiting until login process is completed',
    });
  }
  authWindow = popupwindow(authUrl, 'facebook Login', 800, 800);
  return new Promise((resolve) => {
    const checkResponse = () => {
      const hash = window.location.hash;
      window.location.hash = '';

      const token = /[#?;,&]token=([^&]+)/.exec(hash);
      const user = /[#?;,&]user=([^&]+)/.exec(hash);
      const error = /[#?;,&]error=([^&]+)/.exec(hash);

      if (error || !token) {
        return resolve({
          error: error ? error[1] : 'no access token',
        });
      }
      return resolve({
        token: token[1],
        user: JSON.parse(unescape(user[1])),
      });
    };
    const checkConnect = setInterval(() => {
      if (!authWindow || !authWindow.closed) {
        return;
      }
      clearInterval(checkConnect);
      authWindow = null;
      checkResponse();
    }, 100);
  });
};

const FacebookLogin = ({handleFacebookLogin}) => {
  const handleClickEvent = (e) => {
    e.preventDefault();
    authorize()
    .then(payload => handleFacebookLogin(payload))
    .catch(payload => handleFacebookLogin(payload));
    return false;
  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6">
      <button href="#" className="btn btn-lg btn-primary btn-block" onClick={handleClickEvent}>
        Facebook
      </button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(FacebookLogin);
