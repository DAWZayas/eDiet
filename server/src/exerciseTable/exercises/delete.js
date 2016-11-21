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
  app.post('/api/exercise/:id/delete', asyncRequest(async (req, res) => {
    // get Exercise input
    const {name} = req.body;
    // get row that contain exercises
    const exercise = await Exercise.get(req.params.id);
    // check if exercise already taken
    const exists = await exerciseTaken(req.params.id, name);
    if (!exists) {
      res.status(404).send({error: 'Exercise not found!'});
      return;
    }

    // check if user is the owner
    if (req.user.id !== exercise.owner) {
      res.status(403).send({error: 'Not enough rights to delete the exercise table!'});
      return;
    }

    // try deleting
    await Exercise.delete();

    // send success status
    res.sendStatus(204);
  }));
};
