import {login, register} from './auth';
import {addNotification} from './notifications';
import {helloWorld} from './helloworld';
import {createMenu, getMenu, deleteMenu, updateMenu} from './menus';

export default [
  createMenu,
  login,
  register,
  addNotification,
  getMenu,
  deleteMenu,
  updateMenu,
  // hello world
  helloWorld,
];
