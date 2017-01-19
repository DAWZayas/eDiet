// npm packages
import passport from 'passport';

// our packages
import {loginTaken} from '../auth';
import {User} from '../db';
import {hash, asyncRequest} from '../util';

export default (app) => {
  app.post('/api/user/:id/delete', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {login, password, passwordRepeat} = req.body;

    if (req.user.id !== req.params.id) {
      res.status(403).send({error: 'Not enough rights to delete other user profile!'});
      return;
    }

    let user;
    try {
      user = await User.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
      return;
    }

    // check passwords for match
    if (password !== passwordRepeat) {
      res.status(400).send({error: 'Passwords do not match!'});
      return;
    }

    // try to delete
    try {
      await user.delete();
      res.sendStatus(204);

    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }
  }));
};
