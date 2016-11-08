// our packages
import './passport';
import login from './login';
import register from './register';
import loginFacebook from './loginFacebook';

export default (app) => {
  login(app);
  register(app);
};

export {loginTaken} from './register';
