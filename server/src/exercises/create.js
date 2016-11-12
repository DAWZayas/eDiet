import {Exercise, thinky} from '../db';
import {asyncRequest} from '../util';

export const exerciseTypeTaken = async (type) => {
  // check if login already taken
  const exerciseType = await Exercise.exercises.filter({type}).run();
  return exerciseType.length > 0;
};

export default (app) => {
  app.post('/api/exercise/:id/exerciseType/add', asyncRequest(async (req, res) => {
    // get Exercise input
    const {type} = req.body;
    // get row with id
    const exercise = await Exercise.get(req.params.id);
    // check if Exercise already taken
    const exists = await exerciseTypeTaken(type);
    if (exists) {
      res.status(403).send({error: 'Exercise type already exists!'});
      return;
    }
    // save exercise type
    exercise.exercises.push({
      type,
    });

    await exercise.save();

    res.sendStatus(201);
  }));
};
