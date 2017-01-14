import {Menu} from '../../db';
import {asyncRequest} from '../../util';
export default (app) => {
  app.get('/api/menu/:name/:timeFood', asyncRequest(async (req, res) => {
    try {
      const menu = await Menu;
      const filter = menu.filter( obj => obj.name===req.params.name).reduce((a,b) => a.concat(b));
      const timeFoods = filter.timeFoods.map( (obj) => Object.assign({}, {timeFood: obj.timeFood}));
      const timeFood = timeFoods.filter( (obj) => obj.timeFood === req.params.timeFood);
      if(!timeFood.length)   res.status(400).send({error: 'timeFood does not exist'});
      res.send( timeFood);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));

  app.get('/api/:name/timeFoods', asyncRequest(async (req, res) => {

    try {
      const menu = await Menu;
      const filter = menu.filter( obj => obj.name===req.params.name).reduce((a,b) => a.concat(b));
      const timeFoods = filter.timeFoods.map( (obj) => Object.assign({}, {timeFood: obj.timeFood}));
      res.send(timeFoods);
    } catch (e) {
      res.status(400).send({error: 'timeFood does not exist'});
    }
  }));
};
