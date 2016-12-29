import {login, register} from './auth';
import {addNotification} from './notifications';
import {helloWorld} from './helloworld';
import {createMenu, getMenu, deleteMenu, updateMenu, getMenuName} from './menus';
import {createTimeFood, deleteTimeFood, updateTimeFood, getTimeFood, getTimeFoods} from './timeFoods';
import {createFood, deleteFood, updateFood, getFood, getFoods} from './foods';
import {createExerciseTable} from './exerciseTable';
import {createExercise, deleteExercise, updateExercise} from './exercise';


export default [
  login,
  register,
  addNotification,
  //administration Menu
  createMenu,
  getMenu,
  deleteMenu,
  updateMenu,
  getMenuName,
  //administration timeFood
  createTimeFood,
  deleteTimeFood,
  updateTimeFood,
  getTimeFood,
  getTimeFoods,
  //administration foods
  createFood,
  deleteFood,
  updateFood,
  getFood,
  getFoods,
  // hello world
  helloWorld,
  // exercise table
  createExerciseTable,
  // exercises
  createExercise,
  deleteExercise,
  updateExercise,

];
