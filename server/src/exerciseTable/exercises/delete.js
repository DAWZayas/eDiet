// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:id/delete', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {id} = req.params;
    const {name} = req.body;

    // get the Exercise
    const exercise = await Exercise.get(id).getField('exercises').filter(name);
    console.log(exercise);
    // check if Exercise exists
    if (!exercise) {
      res.status(400).send({error: 'Exercise not found!'});
      return;
    }

    // check if user is the owner
    if (id !== exercise.owner) {
      res.status(403).send({error: 'Not enough rights to delete the exercise table!'});
      return;
    }

    // try deleting
    await Exercise.delete();

    // send success status
    res.sendStatus(204);
  }));
};
