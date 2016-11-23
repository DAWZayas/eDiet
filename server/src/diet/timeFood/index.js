import addTimeFood from './addTimeFood';
import getTimeFood from './getTimeFood';
import updateTimeFood from './updateTimeFood';
import deleteTimeFood from './deleteTimeFood';

export default (app) => {
  addTimeFood(app);
  getTimeFood(app);
  updateTimeFood(app);
  deleteTimeFood(app);
};
