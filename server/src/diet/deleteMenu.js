// npm packages
import passport from 'passport';

// our packages
import {Menu} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/menu/delete/:id',/* passport.authenticate('jwt', {session: false}),*/ asyncRequest(async (req, res) => {
    // get requested question
    const menu = await Menu.get(req.params.id);

    // check if user is the owner
    /*if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'you can not entry !'});
      return;
    }*/

    // delete
    await menu.delete();

    // send success status
    res.sendStatus(204);
  }));
};
