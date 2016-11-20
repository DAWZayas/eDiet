// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export const exerciseTaken = async (name) => {
  // check if exercise already taken
  const exerciseName = await Exercise.filter({name}).run();
  return exerciseName.length > 0;
};

export default (app) => {
  app.post('/api/exercise/add', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get exercise input
    const {name, level, exercises} = req.body; // eslint-disable-line no-unused-vars
    // check if Exercise already taken
    const exists = await exerciseTaken(name);
    if (exists) {
      res.status(403).send({error: 'Exercice already exists!'});
      return;
    }

    // save new Exercise
    const exercise = new Exercise({
      name,
      level,
      exercises,
      owner: req.user.id,
    });
    await exercise.save();

    res.sendStatus(201);
  }));
};
