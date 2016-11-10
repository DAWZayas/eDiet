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
  app.post('/api/exercise/addExercise', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    // get exercise input
    const {name} = req.body;
    // check if Exercise already taken
    const exists = await exerciseTaken(name);
    if (exists) {
      res.status(403).send({error: 'Exercice already exists!'});
      return;
    }

    // save new Exercise
    const exercise = new Exercise({
      name,
    });

    Exercise.exercises.push({
      exercise,
    });

    await exercise.save();

    res.sendStatus(201);
  }));
};
