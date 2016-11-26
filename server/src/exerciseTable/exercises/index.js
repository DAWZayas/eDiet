// our packages
import create from './create';
import deleteExercise from './delete';
import get from './get';
import update from './update';

export default (app) => {
  create(app);
  deleteExercise(app);
  get(app);
  update(app);
};
