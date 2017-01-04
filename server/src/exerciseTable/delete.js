import passport from 'passport';

import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/exercise/delete/:name', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    let table;
    let tables;

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name).reduce((a, b) => a.concat(b));

      if (req.user.id !== table.owner) {
        res.status(403).send({error: 'No tienes los permisos necesarios para borrar la tabla'});
        return;
      }

      await table.delete();
      res.sendStatus(204);

    } catch (e) {
      res.status(400).send({error: 'Tabla no encontrada'});

    }
  }));
};
