// npm packages
import passport from 'passport';

// our packages
import {loginTaken} from '../auth';
import {User} from '../db';
import {hash, asyncRequest} from '../util';

export default (app) => {
  app.post('/api/user/:id/update', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {passwordRepeat, password, email, height} = req.body;

    if (req.user.id !== req.params.id) {
      res.status(403).send({error: 'Not enough rights to change other user profile!'});
      return;
    }

    let user;
    try {
      user = await User.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
      return;
    }

    // check if data is actually changed

    const passwordChanged = password && user.password !== hash(password);
    const emailChanged = email && user.email !== email;
    const heightChanged = height && user.height !== height;
    // if not - just send OK
    if ( !passwordChanged && !emailChanged && !heightChanged) {
      delete user.password;
      res.send(user);
      return;
    }

    // check passwords for match
    if (passwordChanged && password !== passwordRepeat) {
      res.status(400).send({error: 'Passwords do not match!'});
      return;
    }

    // check if new login is taken

    // update data

    if (password) {
      user.password = hash(password);
    }
    if (email) {
      user.email = email;
    }
    if (height) {
      user.height = height;
    }
    // try to save
    try {
      await user.save();
    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }

    // send succcess
    delete user.password;
    res.send(user);
  }));

  app.post('/api/user/:id/addWeight', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {weight} = req.body;

    if (req.user.id !== req.params.id) {
      res.status(403).send({error: 'Not enough rights to change other user profile!'});
      return;
    }

    let user;
    try {
      user = await User.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
      return;
    }
    // update data
    if (weight) {
      user.weight.push(weight);
    }

    // try to save
    try {
      await user.save();
    } catch (e) {
      res.status(400).send({error: e.toString()});
      return;
    }

    // send succcess
    res.send(user);
  }));


};
