// our packages
import menu from './menu';
import getMenu from './getMenu';
import food from './food';
import updateMenu from './updateMenu';
import deleteMenu from './deleteMenu';

export default (app) => {
  menu(app);
  getMenu(app);
  updateMenu(app);
  food(app);
  deleteMenu(app);
};

export {menuTaken} from './menu';
