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
    const {nameFood} = req.body;
    // check if Menu already taken
    const exists = await foodTaken(nameFood);
    if (exists) {
      res.status(403).send({error: 'Name food already exists!'});
      return;
    }

    // save nameFood Menu
    const menu = await Menu.get('ac296b20-46e2-4d01-af99-e6fd0742f942').update({foods: r.table("Menu").row('nameFood').default([]).append(nameFood)}).run();

    await menu.save();

    res.sendStatus(201);
  }));
};
