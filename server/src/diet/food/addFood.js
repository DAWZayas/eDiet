import {Menu} from '../../db';
import {asyncRequest} from '../../util';

export const timeFoodTaken = async (menu, foodName, timeFoodName) => {
  // check if login already taken
  const foodsName = menu.timeFoods.filter(obj => obj.timeFood === timeFoodName ? true : false);
  const objectFood = foodsName.reduce((a,b) => a.concat(b));
  const food = objectFood.foods.filter(obj => obj.nameFood === foodName ? true : false);
  return food.length > 0;
};

export default (app) => {
  app.post('/api/menu/:id/:name/food/add', asyncRequest(async (req, res) => {
    // get Menu input
    const {nameFood, calories} = req.body;
    const name = req.params.name
    // get row that contain nameFood
    const menu = await Menu.get(req.params.id);
    // check if Menu already taken
    const exists = await timeFoodTaken(menu, nameFood, name);
    if (exists) {
      res.status(403).send({error: 'Time food already exists!'});
      return;
    }
    // save nameFood Menu and Food
    menu.timeFoods.filter(obj => obj.timeFood === name ? true : false).map(obj => obj.foods.push({nameFood, calories}));

    await menu.save();

    res.sendStatus(201);
  }));
};
