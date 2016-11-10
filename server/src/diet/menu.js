import passport from 'passport';

import {Menu} from '../db';
import {asyncRequest} from '../util';

export const menuTaken = async (name) => {
  // check if Menu already taken
  const menuName = await Menu.filter({name}).run();
  return menuName.length > 0;
};

export default (app) => {
  app.post('/api/menu/add', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get Menu input
    const {name, ownner} = req.body;
    // check if Menu already taken
    const exists = await menuTaken(name);
    if (exists) {
      res.status(403).send({error: 'Menu already exists!'});
      return;
    }

    // save new Menu
    const menu = new Menu({
      name,
      owner: req.user.id,
    });
    await menu.save();

    res.sendStatus(201);
  }));
};
