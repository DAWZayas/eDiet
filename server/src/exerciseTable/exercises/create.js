// our packages
import {Exercise, r} from '../../db';
import {asyncRequest} from '../../util';

export const exerciseTaken = async (table, name) => {
  // check if exercise already taken
  const exerciseName = table.exercises.filter(obj => obj.name === name);
  return exerciseName.length > 0;
};

export default (app) => {
  app.post('/api/exercise/:name/add', asyncRequest(async (req, res) => {
    const {name, calories, type, time} = req.body;
    let table;
    let tables;

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name).reduce((a, b) => a.concat(b));

    } catch (e) {
      res.status(400).send({error: 'No se ha encontrado la tabla'});
    }

    const exists = await exerciseTaken(table, name);
    if (exists) {
      res.status(403).send({error: 'El ejercicio ya existe'});
      return;
    }

    table.exercises.push({
      name,
      calories,
      type,
      time,
    });

    await table.save();
    res.sendStatus(201);
  }));
};
