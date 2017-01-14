import {Menu} from '../../db';
import {asyncRequest} from '../../util';
export default (app) => {
  app.get('/api/menu/:nameMenu/:nameTimeFood/:nameFood/food', asyncRequest(async (req, res) => {
    try {
      const {nameMenu, nameTimeFood, nameFood} = req.params;
      const menu = await Menu;
      const menuFilter= menu.filter( ({name}) => name === nameMenu).reduce((a,b) => a.concat(b));
      const foodsName = menuFilter.timeFoods.filter(obj => obj.timeFood === nameTimeFood);
      const objectFood = foodsName.reduce((a,b) => a.concat(b));
      const foods = objectFood.foods.filter( obj => obj.nameFood === nameFood )
      if(!foods.length)   res.status(400).send({error: 'food does not exist'});
      res.send(foods);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));

  app.get('/api/:nameMenu/:nameTimeFood/foods', asyncRequest(async (req, res) => {
    try {
      const {nameMenu, nameTimeFood} = req.params;
      const menu = await Menu;
      const menuFilter= menu.filter( ({name}) => name === nameMenu).reduce((a,b) => a.concat(b));
      const foodsName = menuFilter.timeFoods.filter(obj => obj.timeFood === nameTimeFood);
      const objectFood = foodsName.reduce((a,b) => a.concat(b));
      res.send(objectFood.foods);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
  }));
};
