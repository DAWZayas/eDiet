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
        <Route path="food/:nameMenu/:time" component={Foods} onEnter={requireAuth}/>
        <Route path="timeFood/:name" component={TimeFood} onEnter={requireAuth}/>
        <Route path="addMenu" component={CreateMenu} onEnter={requireAuth}/>
        <Route path="register" component={Register} />
          // Tablas
          <Route path="tables" component={Tables} onEnter={requireAuth} />
          <Route path="/tables/addTable" component={AddTable} onEnter={requireAuth} />
          <Route path="/tables/update/:name" component={UpdateTable} onEnter={requireAuth}/>
          // Ejercicios
          <Route path="tables/:name" component={Exercises} onEnter={requireAuth} />
          <Route path="/tables/:name/addExercise" component={AddExercise} onEnter={requireAuth} />
          <Route path="/tables/:name/update/:exercise" component={UpdateExercise} onEnter={requireAuth} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
