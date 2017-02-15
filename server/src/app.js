// npm packages
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';

// our packages
import {logger} from './util';
import {auth as authConfig} from '../config';
import setupAuthRoutes from './auth';
import setupUserRoutes from './user';
import setupMenuRoutes from './diet';
import setupExerciseTableRoutes from './exerciseTable';
import setupExercisesRoutes from './exerciseTable/exercises';
import setupUploadsRoutes from './uploads';

// init app
const app = express();

// setup logging
app.use(morgan('combined', {stream: logger.stream}));

// setup CORS
app.use(cors())

// add body parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// add cookie parsing
app.use(cookieParser());

// add session support
app.use(session({
  secret: authConfig.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true},
}));

// add passport.js
app.use(passport.initialize());
app.use(passport.session());

app.use('/static', express.static('uploads'));

// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// setup authentication routes
setupAuthRoutes(app);
setupUserRoutes(app);
// setup Menu routes
setupMenuRoutes(app);
// setup Exercise table routes
setupExerciseTableRoutes(app);
// setup Exercises routes
setupExercisesRoutes(app);
// Uploads
setupUploadsRoutes(app);

// catch all unhandled errors
app.use((err, req, res, next) => {
  logger.error('unhandled application error: ', err);
  res.status(500).send(err);
});

// export app
export default app;
