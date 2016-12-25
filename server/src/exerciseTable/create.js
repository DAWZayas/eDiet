import passport from 'passport';

import {Exercise} from '../db';
import {asyncRequest} from '../util';

export const tableTaken = async (name) => {
  const tableName = await Exercise.filter({name}).run();
  return tableName.length > 0;
};

export default (app) => {
  app.post('/api/exercise/add', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {name, level} = req.body;

    if (!name || !level) {
      res.status(400).send({error: 'Debes rellenar ambos campos.'});
    }
    // check if Exercise already taken
    const exists = await tableTaken(name);
    if (exists) {
      res.status(403).send({error: 'La tabla ya existe'});
      return;
    }

    // save new Exercise
    const table = new Exercise({
      name,
      level,
      owner: req.user.id,
    });

    await table.save();

    res.sendStatus(201);
  }));
};
