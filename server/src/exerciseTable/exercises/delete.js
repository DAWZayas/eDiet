// npm packages
import passport from 'passport';

// our packages
import {Exercise, r} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:id/delete', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {id} = req.params;

    // get the Exercise
    const exercise = await r.db('expertsdb').table('Exercise').filter({id})
      .getField('exercises')
      .filter(name)
      .get(id);

    // check if Exercise exists
    if (!exercise) {
      res.status(400).send({error: 'Exercise not found!'});
      return;
    }

    // check if user is the owner
    if (req.user.id !== exercise.owner) {
      res.status(403).send({error: 'Not enough rights to delete the exercise table!'});
      return;
    }

    // try deleting
    await exercise.delete();

    // send success status
    res.sendStatus(204);
  }));
};
