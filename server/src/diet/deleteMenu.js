// npm packages
import passport from 'passport';

// our packages
import {Menu} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/menu/delete/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get requested question
    let menu
    try {
      menu = await Menu.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
    }
    // check if user is the owner
    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'you can not entry !'});
      return;
    }

    // delete
    await menu.delete();

    // send success status
    res.sendStatus(204);
  }));
};
