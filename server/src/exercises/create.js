// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export const exerciseTypeTaken = async (type) => {
  // check if exercise already taken
  const exerciseTypeName = await Exercise.filter('exercises').filter({type}).run();
  return exerciseTypeName.length > 0;
};

export default (app) => {
  app.post('/api/exercise/:id/typeExercise/add', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => { // eslint-disable-line max-len
    // get exercise input
    const {type} = req.body;
    const exercise = Exercise.get(req.params.id);
    // check if type exercise already taken
    const exists = await exerciseTypeTaken(type);
    if (exists) {
      res.status(403).send({error: 'Exercice type already exists!'});
      return;
    }

/*
    // check if user is the owner
    if (req.user.id !== exercise.owner) {
      res.status(403).send({error: 'Not enough rights to change the exercise table!'});
      return;
    }
*/
    // save exercise type
    exercise.filter('exercises').push({
      type,
    });

    await exercise.save();

    res.sendStatus(201);
  }));
};
