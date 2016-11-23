import {Menu} from '../../db';
import {asyncRequest} from '../../util';
export default (app) => {
  app.get('/api/menu/:id/timeFood', asyncRequest(async (req, res) => {
    try {
      const {id} = req.params.id;
      const menu = await Menu.get(id);
      res.send(menu.timeFoods);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
};
