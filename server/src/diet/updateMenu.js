// npm packages
import passport from 'passport';

// our packages
import {Menu} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/menu/update/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {id} = req.params;
    // get user input
    const {name} = req.body;
    // make sure text is not empty
  /*  if (name !== undefined && !name.length) {
      res.status(400).send({error: 'Menu name should be not empty!'});
      return;
    }*/

    // get the menu
    const menu = await Menu.get(id);

    // check if menu exists
    if(!menu){
      res.status(400).send({error: 'Menu not found!'});
      return;
    }
/*
    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'Not enough rights to change the Menu!'});
      return;
    }
*/
    // if not changes- just send OK
    if (!name) {
      res.send(menu);
      return;
    }

    if (name) {
      menu.name = name;
    }

    // try saving
    await menu.save();

    // send created question back
    res.send(menu);
  }));
};
