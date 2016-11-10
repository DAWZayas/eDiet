// npm packages
import passport from 'passport';

// our packages
import {Menu} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/menu/delete/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get requested question

    const {id} = req.params;
    const menu = await Menu.get(id);

/*
    // check if user is the owner
    if (req.user.id !== question.owner) {
      res.status(403).send({error: 'Not enough rights to delete the question!'});
      return;
    }
*/

    // delete
    await menu.delete();

    // send success status
    res.sendStatus(204);
  }));
};
