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

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    const {name, level} = req.body;

    if (name !== undefined && !name.length) {
       res.status(400).send({error: 'Fields should be not empty!'});
       return;
     }
    // check if Menu already taken
    const exists = await menuTaken(name);
    if (exists) {
      res.status(403).send({error: 'Menu already taken!'});
      return;
    }

    // save new Menu
    const menu = new Menu({
      name,
      level,
      owner: req.user.id,
    });
    await menu.save();

    res.sendStatus(201);
  }));
};
