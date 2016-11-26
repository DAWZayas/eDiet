// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:id/get', asyncRequest(async (req, res) => {
    try {
      const {id} = req.params;
      const {name} = req.body;

      const exerciseTable = await Exercise.get(id);
      const exercises = exerciseTable.exercises.filter(object => object.name === name);
      const exercise = exercises.reduce((a, b) => a.concat(b));

      res.send(exercise);
    } catch (e) {
      res.status(400).send({error: 'Exercise does not exist'});
    }
  }));
};
