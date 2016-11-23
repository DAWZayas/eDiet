import {Menu} from '../../db';
import {asyncRequest} from '../../util';
export default (app) => {
  app.get('/api/menu/:id/:name/food', asyncRequest(async (req, res) => {
    try {
      const {id, name} = req.params;
      const menu = await Menu.get(id);
      const foodsName = menu.timeFoods.filter(obj => obj.timeFood === name ? true : false);
      const objectFood = foodsName.reduce((a,b) => a.concat(b));
      res.send(objectFood);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
};
