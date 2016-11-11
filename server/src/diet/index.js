// our packages
import menu from './menu';
import getMenu from './getMenu';
import timeFood from './timeFood';
import updateMenu from './updateMenu';
import deleteMenu from './deleteMenu';

export default (app) => {
  menu(app);
  getMenu(app);
  updateMenu(app);
  timeFood(app);
  deleteMenu(app);
};

export {menuTaken} from './menu';
