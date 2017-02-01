// our packages
import {Exercise, r} from '../../db';
import {asyncRequest} from '../../util';
import passport from 'passport';


export const exerciseTaken = async (table, name) => {
  // check if exercise already taken
  const exerciseName = table.exercises.filter(obj => obj.name === name);
  return exerciseName.length > 0;
};

export default (app) => {
    app.post('/api/exercise/:name/add', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {

    const {name, calories, type, time, series, repeats} = req.body;
    let table;
    let tables;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name).reduce((a, b) => a.concat(b));

    } catch (e) {
      res.status(400).send({error: 'Table not found!'});
    }

    const exists = await exerciseTaken(table, name);
    if (exists) {
      res.status(403).send({error: 'Exercise already taken!'});
      return;
    }

    table.exercises.push({
      name,
      calories,
      type,
      time,
      series,
      repeats
    });

    await table.save();
    res.sendStatus(201);
  }));
};
