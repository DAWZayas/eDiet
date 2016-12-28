// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:id/delete', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {id} = req.params;
    const {name} = req.body;

    if (!id.length || !name.length) {
      res.status(400).send({error: 'Debe rellenar ambos campos'});
      return;
    }

    let exerciseTable;
    try {
      exerciseTable = await Exercise.get(req.params.id);

    } catch (e) {
      res.status(400).send({error: 'No existe la tabla'});
      return;
    }

    const exists = exerciseTable.exercises.filter(obj => obj.name === name);

    if(exists.length === 0){
      res.status(403).send({error: 'No existe el ejercicio'});
      return;
    }

    if (!name) {
      res.send(exerciseTable.exercises);
      return;
    }
    const deleteExercise = exerciseTable.exercises.filter((obj, index) => obj.name === name ? exerciseTable.exercises.splice(index, index + 1) : true);

    await exerciseTable.save();
    // send success status
    res.sendStatus(204);
  }));
};
