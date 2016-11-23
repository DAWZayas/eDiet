// our packages
import addMenu from './addMenu';
import getMenu from './getMenu';
import updateMenu from './updateMenu';
import deleteMenu from './deleteMenu';
import timeFood from './timeFood';
import food from './food';

export default (app) => {
  addMenu(app);
  getMenu(app);
  updateMenu(app);
  deleteMenu(app);
  timeFood(app);
  food(app);
};
