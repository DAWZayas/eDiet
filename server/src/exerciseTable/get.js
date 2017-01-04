// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/exercise/:name', asyncRequest(async (req, res) => {
    let tables;
    let table;

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name);

    } catch (e) {
      res.status(400).send({error: 'No se ha encontrado la tabla'});
    }

    res.send(table);
  }));

  app.get('/api/exercise', asyncRequest(async (req, res) => {
    let tables;
    try {
      tables = await Exercise;

    } catch (e) {
      res.status(400).send({error: 'No se ha podido recuperar las tablas'});
    }

    res.send(tables);
  }));
};
