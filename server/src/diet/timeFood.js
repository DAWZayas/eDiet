import {Menu} from '../db';
import {asyncRequest} from '../util';

export const timeFoodTaken = async (name) => {
  // check if login already taken
  const foodsName = await Menu.timeFoods.filter({name}).run();
  return foodsName.length > 0;
};

export default (app) => {
  app.post('/api/menu/:id/timeFood/add', asyncRequest(async (req, res) => {
    // get Menu input
    const {timeFood} = req.body;
    // get row with id
    const menu = await Menu.get(req.params.id);
    // check if Menu already taken
    const exists = await timeFoodTaken(timeFood);
    if (exists) {
      res.status(403).send({error: 'Time food already exists!'});
      return;
    }
    // save nameFood Menu and Food
    menu.timeFoods.push({
      timeFood,
    });

    await menu.save();

    res.sendStatus(201);
  }));
};
