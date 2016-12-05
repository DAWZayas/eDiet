import {login, register} from './auth';
import {addNotification} from './notifications';
import {helloWorld} from './helloworld';
import {createMenu} from './menus';

export default [
  createMenu,
  login,
  register,
  addNotification,
  // hello world
  helloWorld,
];
