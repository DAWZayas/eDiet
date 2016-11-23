// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:id/get', asyncRequest(async (req, res) => {
    try {
      const {id} = req.params;
      const {name} = req.body;

      const exercise = await Exercise.get(id);
      const exercises = exercise.exercises.filter(function (obj) {
        return obj.name === name ? true : false;
      });
      res.send(exercises);
    } catch (e) {
      res.status(400).send({error: 'Exercise does not exist'});
    }
  }));
};
