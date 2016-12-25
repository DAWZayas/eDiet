// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/exercise/update/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
      const {id} = req.params;
      const {name, level} = req.body;

      const table = await Exercise.get(id);

      if (!table) {
        res.status(400).send({error: 'Tabla no encontrada'});
        return;
      }

      if (req.user.id !== table.owner) {
        res.status(403).send({error: 'No tienes permisos para modificar la tabla.'});
        return;
      }

      if (!name && !level) {
        res.send(table);
        return;
      }

      if (!name && level) {
        table.name = table.name;
        table.level = level;
      }

      if (name && !level) {
        table.name = name;
        table.level = table.level;
      }

      if (name && level) {
        table.name = name;
        table.level = level;
      }

      await table.save();
      res.send(table);
  }));
};
