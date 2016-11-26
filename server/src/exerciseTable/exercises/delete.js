import passport from 'passport';

// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.delete('/api/exercise/:id/delete', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => { // eslint-disable-line
    const {id} = req.params;
    const {name} = req.body;

    if (name.length === 0) {
      res.status(400).send({error: 'Exercise name should be not empty!'});
      return;
    }

    const exerciseTable = await Exercise.get(id);

    if (req.user.id !== exerciseTable.owner) {
      res.status(403).send({error: 'Not enough rights to change the Exercise table!'});
      return;
    }

    const exerciseExist = await exerciseTable.exercises.filter(object => object.name === name);

    if (exerciseExist.length === 0) {
      res.status(404).send({error: 'The exercise doesn\'t exist!'});
      return;
    }

    if (!exercise) {
      res.send(exerciseTable.exercises);
      return;
    }

    const deleteExercise = exerciseTable.exercises.filter((object, index) => object.name === name ? exerciseTable.exercises.splice(index, index + 1) : true);
    
    // try delete and saving
    await exerciseTable.save();

    // send created question back
    res.sendStatus(204);

  }));
};
