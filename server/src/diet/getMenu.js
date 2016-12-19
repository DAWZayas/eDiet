import {Menu} from '../db';
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
      const menu = await Menu;
      res.send(menu);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
};
