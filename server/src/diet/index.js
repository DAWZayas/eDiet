// our packages
import menu from './menu';
import getMenu from './getMenu';
import food from './food';

export default (app) => {
  menu(app);
  getMenu(app);
  food(app);
};

export {menuTaken} from './menu';
