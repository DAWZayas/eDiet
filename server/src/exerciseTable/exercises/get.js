// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:name/get', asyncRequest(async (req, res) => {
    // Sacar 1 ejercicio concreto
    let tables;
    let table;
    let exercise;
    const {name} = req.body;

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name).reduce((a, b) => a.concat(b));

    } catch (e) {
      res.status(400).send({error: 'No se ha encontrado la tabla'});
    }

    try {
      exercise = table.exercises.filter(exercise => exercise.name === req.body.name).reduce((a, b) => a.concat(b));

    } catch (e) {
      res.status(400).send({error: 'No se ha encontrado el ejercicio'});
    }

    res.send(exercise);
  }));

  app.get('/api/exercises/:name/get', asyncRequest(async (req, res) => {
    // Sacar todos los ejercicios de una tabla
    let tables;
    let table;
    let exercises;

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name).reduce((a, b) => a.concat(b));

    } catch (e) {
      res.status(400).send({error: 'No se ha encontrado la tabla'});
    }

    try {
      exercises = table.exercises;

    } catch (e) {
      res.status(400).send({error: 'No se han encontrado ejercicios'});
    }

    res.send(exercises);
  }));
};
