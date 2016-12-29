import {Menu} from '../../db';
import {asyncRequest} from '../../util';
export default (app) => {
  app.get('/api/menu/:name/timeFood', asyncRequest(async (req, res) => {
    try {
      const menu = await Menu;
      const filter = menu.filter( obj => obj.name===req.params.name).reduce((a,b) => a.concat(b));
      res.send({name: filter.name, timeFoods: filter.timeFoods});
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));

  app.get('/api/timeFoods', asyncRequest(async (req, res) => {

    try {
      const menu = await Menu;
      const idTimeFood= menu.map(({name, timeFoods}) =>  timeFoods.map( ({timeFood}) =>
                        Object.assign( {}, {name}, {timeFood}) ) );
      const arrReduce = idTimeFood.reduce( (a,b) => a.concat(b));
      res.send(arrReduce);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
};
