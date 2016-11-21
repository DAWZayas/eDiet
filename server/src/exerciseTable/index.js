// our packages
import create from './create';
import get from './get';
import update from './update';
import deleteTable from './delete';
import exercises from './exercises';

export default (app) => {
  create(app);
  get(app);
  update(app);
  deleteTable(app);
  exercises(app);
};

export {exerciseTaken} from './create';
