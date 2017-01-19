// our packages
import get from './get';
import update from './update';
import deleteUser from './delete';

export default (app) => {
  get(app);
  update(app);
  deleteUser(app);
};
