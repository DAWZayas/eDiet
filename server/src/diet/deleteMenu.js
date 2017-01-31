// npm packages
import passport from 'passport';

// our packages
import {Menu} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/menu/delete/:name', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get requested question
    let menus;
    let menu;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    // check if user is the owner
    try {
      menus = await Menu;
      menu = menus.filter( menu => menu.name === req.params.name ).reduce((a,b) => a.concat(b));
    } catch (e) {
      res.status(400).send({error: 'Menu not found'});
    }

    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'Not enough rights to do this action!!'});
      return;
    }

      // delete
    await menu.delete();

    // send success status
    res.sendStatus(204);
  }));
};
