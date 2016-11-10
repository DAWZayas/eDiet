import {Menu} from '../db';
import {asyncRequest} from '../util';
export default (app) => {
  app.get('/api/menu/:id', asyncRequest(async (req, res) => {
    try {
      const menu = await Menu.get(req.params.id);
      res.send(menu);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
};
