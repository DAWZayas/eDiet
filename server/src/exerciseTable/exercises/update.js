
import passport from 'passport';

// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:id/update', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {id} = req.params;
    const {name, calories, type, time} = req.body;

    const exerciseTable = await Exercise.get(id);
    const exercise = await exerciseTable.exercises.filter(object => object.name).reduce((a, b) => a.concat(b));
    console.log(exercise);

    if ((name !== undefined && !name.length)
        && (calories !== undefined && !calories.length)
        && (type !== undefined && !type.length)
        && (time !== undefined && !time.length)
      ) {
      res.status(400).send({error: 'You must change a field!'});
      return;
    }

    if (!exercise) {
      res.status(400).send({error: 'Exercise not found!'});
      return;
    }

    if (req.user.id !== exerciseTable.owner) {
      res.status(403).send({error: 'Not enough rights to change the exercise Table!'});
      return;
    }

    // if not changes - just send OK
    if (!name && !calories && !type && !time) {
      res.send(exerciseTable.exercises);
      return;
    }

    if (name && !calories && !type && !time) {
      exercise.name = name;
      exercise.calories = exercise.calories;
      exercise.type = exercise.type;
      exercise.time = exercise.time;
    }

    if (!name && calories && !type && !time) {
      exercise.name = exercise.name;
      exercise.calories = calories;
      exercise.type = exercise.type;
      exercise.time = exercise.time;
    }

    if (!name && !calories && type && !time) {
      exercise.name = exercise.name;
      exercise.calories = exercise.calories;
      exercise.type = type;
      exercise.time = exercise.time;
    }

    if (!name && !calories && !type && time) {
      exercise.name = exercise.name;
      exercise.calories = exercise.calories;
      exercise.type = exercise.type;
      exercise.time = time;
    }

    // try saving
    await exerciseTable.save();

    // send created question back
    res.send(exerciseTable);

  }));
};
