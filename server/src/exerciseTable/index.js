// our packages
import create from './create';
import get from './get';
import update from './update';
import deleteTable from './delete';

export default (app) => {
  create(app);
  get(app);
  update(app);
  deleteTable(app);
};

export {exerciseTaken} from './create';
