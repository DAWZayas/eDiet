// our packages
import create from './create';
import deleteExercise from './delete';

export default (app) => {
  create(app);
  deleteExercise(app);
};
