import passport from 'passport';

import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/exercise/delete/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {id} = req.params;
    const table = await Exercise.get(id);

    if (!table) {
      res.status(400).send({error: 'Tabla no encontrada'});
      return;
    }

    if (req.user.id !== table.owner) {
      res.status(403).send({error: 'No tienes los permisos necesarios para borrar la tabla'});
      return;
    }

    await table.delete();
    res.sendStatus(204);

  }));
};
