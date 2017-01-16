import {Menu, r} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/menu/:name', asyncRequest(async (req, res) => {
    try {
      const menu = await Menu;
      const filter = menu.filter( obj => obj.name===req.params.name);
      res.send(filter);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
  app.get('/api/menu', asyncRequest(async (req, res) => {
    try {
      const skip = parseInt(req.query.skip, 10) || 0;
      const limit = parseInt(req.query.limit, 10) || 10;
      const menus = await r.table('Menu')
                             .pluck('name')
                             .orderBy(r.desc('name'))
                             .skip(skip)
                             .limit(limit);
      res.send(menus);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
};
