// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export const exerciseExist = async (table, name) => {
  const exerciseName = table.exercises.filter(obj => obj.name === name);
  return exerciseName.length > 0;
};

export default (app) => {
  app.post('/api/exercise/:name/delete', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {name} = req.body;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    if (!req.params.name || !name.length) {
      res.status(400).send({error: 'Fields should be not empty!'});
      return;
    }

    let tables;
    let table;

    try {
      tables = await Exercise;
      table = await tables.filter(table => table.name === req.params.name).reduce((a, b) => a.concat(b));

    } catch (e) {
      res.status(400).send({error: 'Table not found!'});
    }

    const exists = await exerciseExist(table, name);
    if (!exists) {
      res.status(403).send({error: 'Exercise not found!'});
      return;
    }

    const deleteExercise = table.exercises.map((obj, index) => obj.name === name ? table.exercises.splice(index, index + 1) : true);

    await table.save();
    res.sendStatus(204);
  }));
};
