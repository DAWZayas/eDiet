import {Exercise} from '../db';
import {asyncRequest} from '../util';

export const exerciseTaken = async (name) => {
  // check if login already taken
  const exerciseName = await Exercise.filter({name}).run();
  return exerciseName.length > 0;
};

export default (app) => {
  app.post('/api/exercise/add', asyncRequest(async (req, res) => {
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
    await exercise.save();

    res.sendStatus(201);
  }));
};
