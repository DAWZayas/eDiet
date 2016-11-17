import {Menu} from '../db';
import {asyncRequest} from '../util';

export const foodTaken = async (name) => {
  // check if login already taken
  const menu = await Menu.get(req.params.id);
  const foodsName = await menu.timeFoods.nameFoods.filter({name}).run();
  return foodsName.length > 0;
};

export default (app) => {
  app.post('/api/menu/:id/timeFood/:name/add', asyncRequest(async (req, res) => {
    // get Menu input
    const {nameFood, calories} = req.body;
    // get row with id
    const menu = await Menu.get(req.params.id);
    // check if Menu already taken
    const exists = await foodTaken(nameFood);
    if (exists) {
      res.status(403).send({error: 'Name food already exists!'});
      return;
    }
    // save nameFood Menu and Food
    menu.timeFoods.foods.push({
      nameFood,
      calories,
    });

    await menu.save();


    res.sendStatus(201);
  }));
};
