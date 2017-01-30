// npm packages
import passport from 'passport';
import jwt from 'jsonwebtoken';

// our packages
import {auth as authConfig, client as clientConfig} from '../../config';

export default (app) => {
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    if (req.user) {
      const token = jwt.sign(req.user, authConfig.jwtSecret);
      res.send({user: req.user, token});
    } else {
      res.status(401).send({error: 'Error logging in!'});
    }
  });


app.get('/api/facebook/login',
    passport.authenticate('facebook', {
      login: null,
      accessType: 'offline',
      session: false,
    }));

  app.get('/api/facebook/callback',
    passport.authenticate('facebook', {failureRedirect: '/login', session: false}),
    (req, res) => {
      if (req.user) {
        const facebookUser = req.user.profile;
        const user = {
          id: facebookUser.id,
          login: facebookUser.displayName,
          provider: facebookUser.provider,
          accessToken: req.user.accessToken,
        };
        const token = jwt.sign(user, authConfig.jwtSecret);
        res.redirect(`http://${clientConfig.host}:${clientConfig.port}/dist/redirecting.html#token=${token}&user=${JSON.stringify(user)}`);
      } else {
        res.status(401).send({error: 'Error logging in!'});
      }
    });

  app.get('/api/google/login',
    passport.authenticate('google', {
      login: null,
      scope: authConfig.google.scope,
      accessType: 'offline',
      session: false,
    }));

  app.get('/api/google/callback',
    passport.authenticate('google', {failureRedirect: '/login', session: false}),
    (req, res) => {
      if (req.user) {
        const googleUser = req.user.profile;
        const user = {
          id: `${googleUser.provider}-${googleUser.id}`,
          login: googleUser.displayName,
          provider: googleUser.provider,
          accessToken: req.user.accessToken,
        };

        const token = jwt.sign(user, authConfig.jwtSecret);
        res.redirect(`http://${clientConfig.host}:${clientConfig.port}/dist/redirecting.html#token=${token}&user=${JSON.stringify(user)}`);
      } else {
        res.status(401).send({error: 'Error logging in!'});
      }
    });
};
