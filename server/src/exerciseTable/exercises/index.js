// our packages
import create from './create';
import deleteExercises from './delete';

export default (app) => {
  create(app);
  deleteExercises(app);
};

export {exerciseTypeTaken} from './create';
