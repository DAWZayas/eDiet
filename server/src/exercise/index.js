// our packages
import exercise from './exercise';
import getExercise from './getExercise';

export default (app) => {
  exercise(app);
  getExercise(app);
};

export {exerciseTaken} from './exercise';
