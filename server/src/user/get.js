// npm packages
import passport from 'passport';

// our packages
import {User} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.get('/api/user/:id',  asyncRequest(async (req, res) => {
    if (req.params.id === 'me') {
      res.send(req.user);
      return;
    }
    try {
      const user = await User.get(req.params.id)
        .without(['password'])
        .execute();
      res.send(user);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
    }
  }));
  app.get('/api/user/:id/weight',  asyncRequest(async (req, res) => {
    if (req.params.id === 'me') {
      res.send(req.user);
      return;
    }
    try {
      const user = await User.get(req.params.id)
        .without(['password'])
        .execute();
      res.send(user.weight);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
    }
  }));

  app.get('/api/user/:id/imc',  asyncRequest(async (req, res) => {
    if (req.params.id === 'me') {
      res.send(req.user);
      return;
    }
    try {
      const user = await User.get(req.params.id)
        .without(['password'])
        .execute();
      res.send(user.imc);
    } catch (e) {
      res.status(400).send({error: 'User does not exist'});
    }
  }));

};
