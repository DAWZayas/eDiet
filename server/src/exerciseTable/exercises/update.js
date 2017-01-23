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
  app.post('/api/exercise/:name/update', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {name, newName, calories, type, time} = req.body;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    if (!req.params.name.length || !name.length) {
      res.status(400).send({error: 'Fields should be not empty!'});
      return;
    }

    let tables;
    let table;
    let exercise;

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name).reduce((a, b) => a.concat(b));

    } catch (e) {
      res.status(400).send({error: 'Table not found!'});
    }

    const exists = await exerciseExist(table, name);
    if (!exists) {
      res.status(403).send({error: 'Exercise not found!'});
      return;
    }

    exercise = table.exercises.filter(obj => obj.name === name);

    if (exercise === newName && !calories && !type && !time) {
      res.send(table);
      return;
    }

    if (newName) {
      table.exercises.filter(obj => obj.name === name ? obj.name = newName : false);
    }

    if (calories) {
      table.exercises.filter(obj => obj.calories !== calories ? obj.calories = calories : false);
    }

    if (type) {
      table.exercises.filter(obj => obj.type !== type ? obj.type = type : false);
    }

    if (time) {
      table.exercises.filter(obj => obj.time !== time ? obj.time = time : false);
    }

    await table.save();
    res.send(table);
  }));
};
