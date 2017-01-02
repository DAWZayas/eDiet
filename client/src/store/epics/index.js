import {login, register} from './auth';
import {addNotification} from './notifications';
import {helloWorld} from './helloworld';
import {createMenu, getMenu, deleteMenu, updateMenu, getMenuName} from './menus';
import {createTimeFood, deleteTimeFood, updateTimeFood, getTimeFood, getTimeFoods} from './timeFoods';
import {createExerciseTable, deleteExerciseTable, updateExerciseTable, getExerciseTable} from './exerciseTable';
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
  // hello world
  helloWorld,
  // exercise table
  createExerciseTable,
  deleteExerciseTable,
  updateExerciseTable,
  getExerciseTable,
  // exercises
  createExercise,
  deleteExercise,
  updateExercise,
];
