// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:id/get', asyncRequest(async (req, res) => {
    try {
      const {id} = req.params;
      const {name} = req.body;

      const exerciseTable = await Exercise.get(id);
      const exercises = exerciseTable.exercises.filter(function (obj) {
        return obj.name === name ? true : false;
      });
      const exercise = exercises.reduce(function(a,b) {a.concat(b);});
      console.log(exercise);
      res.send(exercise);
    } catch (e) {
      res.status(400).send({error: 'Exercise does not exist'});
    }
  }));
};
