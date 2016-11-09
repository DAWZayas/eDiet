import {Menu} from '../db';
import {asyncRequest} from '../util';

export const menuTaken = async (name) => {
  // check if login already taken
  const foodsName = await Menu.filter({name}).run();
  return foodsName.length > 0;
};

export default (app) => {
  app.post('/api/menu/add', asyncRequest(async (req, res) => {
    // get Menu input
    const {name} = req.body;
    // check if Menu already taken
    const exists = await menuTaken(name);
    if (exists) {
      res.status(403).send({error: 'Menu already exists!'});
      return;
    }

    // save new Menu
    const menu = new Menu({
      name,
    });
    await menu.save();

    res.sendStatus(201);
  }));
};
