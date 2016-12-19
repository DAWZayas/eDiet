import {login, register} from './auth';
import {addNotification} from './notifications';
import {helloWorld} from './helloworld';
import {createMenu, getMenu, deleteMenu, updateMenu} from './menus';
import {createTimeFood, deleteTimeFood, updateTimeFood} from './timeFoods'
import {createExerciseTable} from './exerciseTable';

export default [
  login,
  register,
  addNotification,
  //administration Menu
  createMenu,
  getMenu,
  deleteMenu,
  updateMenu,
  //administration timeFood
  createTimeFood,
  deleteTimeFood,
  updateTimeFood,
  // hello world
  helloWorld,
  // exerciseTable
  createExerciseTable,
];
