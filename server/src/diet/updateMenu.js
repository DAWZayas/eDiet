// npm packages
import passport from 'passport';

// our packages
import {Menu} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/menu/update/:name', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    const {name, level} = req.body;
    // make sure text is not empty
   if (name !== undefined && !name.length) {
      res.status(400).send({error: 'Fields should be not empty!'});
      return;
    }
    let menu;
    // get the menu
    try {
      menu = await Menu;
      menu = menu.filter( obj => obj.name===req.params.name).reduce((a,b) => a.concat(b));
    } catch (e) {
      res.status(400).send({error: 'Menu not found'});
    }

    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'Not enough rights to change the Menu!'});
      return;
    }

    // if not changes- just send OK
    if (!req.params.name) {
      res.send(menu);
      return;
    }

    if (req.params.name) {
      menu.name = name;
      menu.level = level;
    }

    // try saving
    await menu.save();
    // send created question back
    res.send(menu);
  }));
};
