import addFood from './addFood';
import getFood from './getFood';
import updateFood from './updateFood';
import deleteFood from './deleteFood';


export default (app) => {
  addFood(app);
  getFood(app);
  updateFood(app);
  deleteFood(app);
};
