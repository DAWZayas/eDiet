// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.delete('/api/exercise/delete/:id', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    // get requested question

    const {id} = req.params;
    const exercise = await Exercise.get(id);

    // check if user is the owner
    if (req.user.id !== exercise.owner) {
      res.status(403).send({error: 'Not enough rights to delete the question!'});
      return;
    }

    // delete
    await exercise.delete();

    // send success status
    res.sendStatus(204);
  }));
};
