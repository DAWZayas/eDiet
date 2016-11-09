// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/exercise/:id', asyncRequest(async (req, res) => {
    try {
      const exercise = await Exercise.get(req.params.id)
      .execute();
      res.send(exercise);
    } catch (e) {
      res.status(400).send({error: 'Exercise does not exist'});
    }
  }));
};
