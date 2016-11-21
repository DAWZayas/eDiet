// our packages
import {Exercise, r} from '../../db';
import {asyncRequest} from '../../util';

export const exerciseTaken = async (id, name) => {
  // check if exercise already taken
  const exerciseName = await r.db('expertsdb').table('Exercise').filter({id})
    .getField('exercises')
    .filter(function(exercises) { // eslint-disable-line
      return exercises('name')
      .contains(name);
    })
    .run();
  return exerciseName.length > 0;
};

export default (app) => {
  app.post('/api/exercise/:id/add', asyncRequest(async (req, res) => {
    // get Exercise input
    const {name, calories, type, time} = req.body;
    // get row that contain exercises
    const exerciseTable = await Exercise.get(req.params.id);
    // check if exercise already taken
    const exists = await exerciseTaken(req.params.id, name);
    if (exists) {
      res.status(403).send({error: 'This exercise already exists!'});
      return;
    }
    // save the data into the array
    exerciseTable.exercises.push({
      name,
      calories,
      type,
      time,
    });

    await exerciseTable.save();

    res.sendStatus(201);
  }));
};
