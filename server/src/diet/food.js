import {Menu} from '../db';
import {asyncRequest} from '../util';

export const foodTaken = async (name) => {
  // check if login already taken
  const foodsName = await Menu.filter({name}).run();
  return foodsName.length > 0;
};

export default (app) => {
  app.post('/api/menu/:id/timeFood/add', asyncRequest(async (req, res) => {
    // get Menu input
    const {timeFood, nameFood, calories} = req.body;
    // check if Menu already taken
    const exists = await foodTaken(timeFood);
    if (exists) {
      res.status(403).send({error: 'Name food already exists!'});
      return;
    }
    // get row with id
    const menu = await Menu.get(req.params.id);

    // save nameFood Menu and Food
    menu.timeFoods.push({
      timeFood,
    });

    await menu.save();


    res.sendStatus(201);
  }));
};
