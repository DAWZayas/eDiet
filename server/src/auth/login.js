// npm packages
import passport from 'passport';
import jwt from 'jsonwebtoken';

// our packages
import {auth as authConfig} from '../../config';

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
      accessType: 'offline',
      session: false,
    }));

  app.get('/api/facebook/callback',
    passport.authenticate('facebook', {failureRedirect: '/login', session: false}),
    (req, res) => {
      if (req.user) {
        const facebookUser = req.user.profile;
        console.log(facebookUser);
        const user = {
          id: facebookUser.id,
          login: facebookUser.displayName,
          registrationDate: facebookUser._json.created_at,
          provider: facebookUser.provider,
          accessToken: req.user.accessToken,
        };
        const token = jwt.sign(user, authConfig.jwtSecret);
        res.redirect(`http://localhost:3000/dist/redirecting.html#token=${token}&user=${JSON.stringify(user)}`);
      } else {
        res.status(401).send({error: 'Error logging in!'});
      }
    });
};
