// our packages
import {Exercise, r} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/exercise/:name', asyncRequest(async (req, res) => {
    let tables;
    let table;

    try {
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name);

      res.send(table);

    } catch (e) {
      res.status(400).send({error: 'No se ha encontrado la tabla'});
    }
  }));

  app.get('/api/exercise', asyncRequest(async (req, res) => {
    try {
      const skip = parseInt(req.query.skip, 10) || 0;
      const limit = parseInt(req.query.limit, 10) || 10;
      const tables = await r.table('Exercise')
                      .pluck('name')
                      .orderBy(r.desc('name'))
                      .skip(skip)
                      .limit(limit);
      res.send(tables);

    } catch (e) {
      res.status(400).send({error: 'No se ha podido recuperar las tablas'});
    }
  }));

  app.get('/api/exercise/:level', asyncRequest(async (req, res) => {
    let tables;
    let table;

    try {
      const skip = parseInt(req.query.skip, 10) || 0;
      const limit = parseInt(req.query.limit, 10) || 10;
      const tables = await r.table('Exercise')
                      .filter({level: req.params.level})
                      .pluck('name')
                      .orderBy(r.desc('name'))
                      .skip(skip)
                      .limit(limit);
      res.send(tables);

    } catch (e) {
      res.status(400).send({error: 'No se han encontrado la tablas'});
    }
  }));

};
