// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/exercise/:id', asyncRequest(async (req, res) => {
    try {
      const table = await Exercise.get(req.params.id)
      .execute();
      res.send(table);

    } catch (e) {
      res.status(400).send({error: 'La tabla no existe'});
    }
  }));
  app.get('/api/exercise', asyncRequest(async (req, res) => {
    try {
      const table = await Exercise;
      res.send(table);

    } catch (e) {
      res.status(400).send({error: 'La tabla no existe'});
    }
  }));
};
