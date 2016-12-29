import {Menu} from '../../db';
import {asyncRequest} from '../../util';
export default (app) => {
  app.get('/api/menu/:nameMenu/:nameTimeFood/food', asyncRequest(async (req, res) => {
    try {
      const {nameMenu, nameTimeFood} = req.params;
      const menu = await Menu;
      const menuFilter= menu.filter( ({name}) => name === nameMenu).reduce((a,b) => a.concat(b));
      const foodsName = menuFilter.timeFoods.filter(obj => obj.timeFood === nameTimeFood);
      const objectFood = foodsName.reduce((a,b) => a.concat(b));
      res.send(objectFood);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));

  app.get('/api/foods', asyncRequest(async (req, res) => {
    try {
      const menu = await Menu;
      const idTimeFood= menu.map(({name, timeFoods}) =>  timeFoods.map( ({timeFood, foods}) =>
                        Object.assign( {}, {name}, {timeFood}, {foods}) ) );
      const arrReduce = idTimeFood.reduce( (a,b) => a.concat(b));
      res.send(arrReduce);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
};
