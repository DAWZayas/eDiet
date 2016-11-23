// our packages
import create from './create';
import deleteExercise from './delete';
import get from './get';

export default (app) => {
  create(app);
  deleteExercise(app);
  get(app);
};
