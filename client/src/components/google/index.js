// npm packages
 import React from 'react';
 import {connect} from 'react-redux';

 // our packages
 import {googleLoginAction} from '../../store/actions';
 import {popupwindow} from '../../util';
 import {server as serverConfig} from '../../../config';

 const host = serverConfig.host;
 const port = serverConfig.port;

 const mapDispatchToProps = dispatch => ({
   handleGoogleLogin: payload => dispatch(googleLoginAction(payload)),
 });

 const authUrl = `http://${host}:${port}/api/google/login`;

 let authWindow = null;

 const authorize = () => {
   if (authWindow) {
     return Promise.resolve({
       error: 'Waiting until login process is completed',
     });
   }
   authWindow = popupwindow(authUrl, 'Google Login', 800, 800);
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

 const GoogleLogin = ({handleGoogleLogin}) => {
   const handleClickEvent = (e) => {
     e.preventDefault();
     authorize()
     .then(payload => handleGoogleLogin(payload))
     .catch(payload => handleGoogleLogin(payload));
     return false;
   };

   return (
     <div className="col-xs-6 col-sm-6 col-md-6">
       <button href="#" className="btn btn-lg btn-danger btn-block" onClick={handleClickEvent}>
         Google
       </button>
     </div>
   );
 };

 export default connect(null, mapDispatchToProps)(GoogleLogin);
