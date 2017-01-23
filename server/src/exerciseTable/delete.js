import passport from 'passport';

import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/exercise/delete/:name', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    let table;
    let tables;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name).reduce((a, b) => a.concat(b));

      if (req.user.id !== table.owner) {
        res.status(403).send({error: 'Not enough rights to do this action!'});
        return;
      }

      await table.delete();
      res.sendStatus(204);

    } catch (e) {
      res.status(400).send({error: 'Table not found!'});

    }
  }));
};
