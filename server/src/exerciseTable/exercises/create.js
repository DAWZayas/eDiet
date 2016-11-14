import {Exercise, r} from '../../db';
import {asyncRequest} from '../../util';

export const exerciseTypeTaken = async (id, name) => {
  // check if login already taken
  const exerciseType = await r.db('expertsdb').table('Exercise').filter({id})
    .getField('exercises')
    .filter(function(exercises) { //eslint-disable-line
      return exercises('type').contains(name);
    })
     .run();
  return exerciseType.length > 0;
};

export default (app) => {
  app.post('/api/exercise/:id/exercises/add', asyncRequest(async (req, res) => {
    // get Menu input
    const {type} = req.body;
    // get row that contain nameFood
    const exercise = await Exercise.get(req.params.id);
    // check if Menu already taken
    const exists = await exerciseTypeTaken(req.params.id, type);
    if (exists) {
      res.status(403).send({error: 'Type exercise already exists!'});
      return;
    }
    // save nameFood Menu and Food
    exercise.exercises.push({
      type,
    });

    await exercise.save();

    res.sendStatus(201);
  }));
};
