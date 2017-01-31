import {login, register, registerAdmin, registerFacebook, googleLogin, registerGoogle} from './auth';
import {addNotification} from './notifications';
import {createMenu, getMenu, deleteMenu, updateMenu, getMenuName, getMenuLevel} from './menus';
import {createTimeFood, deleteTimeFood, updateTimeFood, getTimeFood, getTimeFoods} from './timeFoods';
import {createFood, deleteFood, updateFood, getFood, getFoods} from './foods';
import {getTables, createTable, getCreateTable, deleteTable, updateTable} from './tables';
import {getExercises, createExercise, deleteExercise, updateExercise} from './exercises';
import {addObservable} from './realTime';
import {updatePassword, updateHeight, updateEmail, getUser, facebookLogin, addWeight, addImc} from './user';


export default [
  login,
  register,
  googleLogin,
  registerGoogle,
  addNotification,
  //administration Menu
  createMenu,
  getMenu,
  deleteMenu,
  updateMenu,
  getMenuName,
  getMenuLevel,
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
  registerFacebook,
  addWeight,
  addImc,
];
