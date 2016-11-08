import passport from 'passport';
import facebook from 'passport-facebook';


export default (app) => {
  app.get('/api/face', passport.authenticate('facebook', { scope : 'email' }));

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      res.status(201).send({error: 'Log in!'});

      res.status(401).send({error: 'Not Log in!'});}
  }
