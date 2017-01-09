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

  app.get('/api/exercise/exercises/get', asyncRequest(async (req, res) => {
    // Sacar todos los nombres de las tablas y sus ejercicios
    let tables;
    let exercises;

    try {
      tables = await Exercise;
      exercises = tables.map(({name, exercises}) => Object.assign({}, {name}, {exercises}));

    } catch (e) {
      res.status(400).send({error: 'No se han encontrado tablas'});
    }

    res.send(exercises);
  }));
};
