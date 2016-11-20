// our packages
import create from './create';
import get from './get';
import update from './update';
import deleteTable from './delete';
import exercises from '.';

export default (app) => {
  create(app);
  get(app);
  update(app);
  deleteTable(app);
  exercises.create(app);
  exercises.delete(app);
};

export {exerciseTaken} from './create';
