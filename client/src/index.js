// npm packages
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

// styles
require('bootstrap/dist/css/bootstrap.min.css');
global.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');
import './scss/main.scss';
import Chart from 'chart.js';

// our packages
import App from './app';
import store from './store';
import {requireAuth} from './util';

// our pages
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notfound';
import CreateMenu from './pages/create';
import TimeFood from './pages/timeFood';
import Foods from './pages/foods';
// Tables
import Tables from './pages/tables';
import AddTable from './pages/addTable';
import UpdateTable from './pages/updateTable';
// Exercises
import Exercises from './pages/exercises';
import AddExercise from './pages/addExercise';
import UpdateExercise from './pages/updateExercise';
import User from './pages/user';
import AdminUser from './pages/registerAdmin';
import GraphUser from './pages/userGraphics';
import UpdateProfile from './pages/updateProfile';
//progress
import Plannings from './pages/plannings';
import ProgressMenu from './pages/progressMenu';
import ShowMenu from './pages/progressShow';
import planningExercises from './pages/planningsExercises';
import exercisesDetail from './pages/exercisesDetail';
import MyPlanMenus from './pages/myPlanMenus';
import MyPlanExercises from './pages/myPlanExercises';
// Upload files
import UploadFiles from './pages/uploadFiles';


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
//onEnter={requireAuth}
// render on page
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}  />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
          //menus
          <Route path="food/:nameMenu/:time" component={Foods} onEnter={requireAuth}/>
          <Route path="timeFood/:name" component={TimeFood} onEnter={requireAuth}/>
          <Route path="addMenu" component={CreateMenu} onEnter={requireAuth}/>
          // Tablas
          <Route path="tables" component={Tables} onEnter={requireAuth} />
          <Route path="/tables/addTable" component={AddTable} onEnter={requireAuth} />
          <Route path="/tables/update/:name" component={UpdateTable} onEnter={requireAuth}/>
          // Ejercicios
          <Route path="tables/:name" component={Exercises} onEnter={requireAuth} />
          <Route path="/tables/:name/addExercise" component={AddExercise} onEnter={requireAuth} />
          <Route path="/tables/:name/update/:exercise" component={UpdateExercise} onEnter={requireAuth} />
          //User
          <Route path="/user" component={User} onEnter={requireAuth} />
          <Route path="/user/addAdmin" component={AdminUser} onEnter={requireAuth} />
          <Route path="/user/graphics" component={GraphUser} onEnter={requireAuth} />
          <Route path="/user/updateProfile" component={UpdateProfile} onEnter={requireAuth} />
          <Route path="/user/myPlan/menu" component={MyPlanMenus} onEnter={requireAuth} />
          <Route path="/user/myPlan/exercise" component={MyPlanExercises} onEnter={requireAuth} />
          // Planning /planning/menu falta el level
          <Route path="/plannings" component={Plannings} onEnter={requireAuth} />
          <Route path="/plannings/:level/exercises/:name" component={exercisesDetail} onEnter={requireAuth} />
          <Route path="/plannings/:level/exercises" component={planningExercises} onEnter={requireAuth} />
          <Route path="/planning/menu/:level" component={ProgressMenu} onEnter={requireAuth} />
          <Route path="/planning/menu/level/:nameMenu" component={ShowMenu} onEnter={requireAuth} />
          // Upload files
          <Route path="/uploadFiles" component={UploadFiles} onEnter={requireAuth} />

        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
