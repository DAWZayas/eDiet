// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/exercise/update/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {id} = req.params;
    // get user input
    const {name, level, exercises} = req.body;

    // make sure text is not empty
    if (name !== undefined && !name.length) {
      res.status(400).send({error: 'Exercise table name should be not empty!'});
      return;
    }

    // get the Exercise table
    const exercise = await Exercise.get(id);

    // check if Exercise table exists
    if (!exercise) {
      res.status(400).send({error: 'Exercise table not found!'});
      return;
    }

    // check if user is the owner
    if (req.user.id !== exercise.owner) {
      res.status(403).send({error: 'Not enough rights to change the exercise table!'});
      return;
    }

    // if not changes - just send OK
    if (!name && !level && !exercises) {
      res.send(exercise);
      return;
    }

    if (!name && level && !exercises) {
      exercise.name = exercise.name;
      exercise.level = level;
      exercise.exercises = exercise.exercises;
    }

    if (!name && !level && exercises) {
      exercise.name = exercise.name;
      exercise.level = exercise.level;
      exercise.exercises = exercises;
    }

    // try saving
    await exercise.save();

    // send created question back
    res.send(exercise);
  }));
};
