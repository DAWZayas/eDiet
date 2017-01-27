import {login, register, registerAdmin, googleLogin} from './auth';
import {addNotification} from './notifications';
import {helloWorld} from './helloworld';
import {createMenu, getMenu, deleteMenu, updateMenu, getMenuName, getMenuNameReal} from './menus';
import {createTimeFood, deleteTimeFood, updateTimeFood, getTimeFood, getTimeFoods} from './timeFoods';
import {createFood, deleteFood, updateFood, getFood, getFoods} from './foods';
import {getTables, createTable, getCreateTable, deleteTable, updateTable} from './tables';
import {getExercises, createExercise, deleteExercise, updateExercise} from './exercises';
import {addObservable} from './realTime';
import {updatePassword, updateHeight, updateEmail, getUser, facebookLogin} from './user';


export default [
  login,
  register,
  googleLogin,
  addNotification,
  //administration Menu
  createMenu,
  getMenu,
  deleteMenu,
  updateMenu,
  getMenuName,
  //administration timeFood
  addObservable,
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
  // exercise
  createTable,
  getTables,
  getCreateTable,
  deleteTable,
  updateTable,
  // exercises
  getExercises,
  createExercise,
  deleteExercise,
  updateExercise,
  //user
  updatePassword,
  updateHeight,
  updateEmail,
  getUser,
  registerAdmin,
  facebookLogin,
];
