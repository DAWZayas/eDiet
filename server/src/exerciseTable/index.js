// our packages
import create from './create';
import get from './get';
import update from './update';
import deleteTable from './delete';
import createExercises from './exercises/index';
import createExercise from './exercise/index';

export default (app) => {
  create(app);
  get(app);
  update(app);
  deleteTable(app);
  createExercises(app);
  createExercise(app);
};

export {exerciseTaken} from './create';
