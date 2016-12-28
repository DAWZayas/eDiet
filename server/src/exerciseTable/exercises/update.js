// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/exercise/:id/update', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {id} = req.params;
    const {name} = req.body;
    const {newName} = req.body;
    const {calories} = req.body;
    const {type} = req.body;
    const {time} = req.body;

    console.log('>>>>', id, name, newName, calories, type, time);

    if (!id.length || !name.length) {
      res.status(400).send({error: 'Debes rellenar los datos identificativos'});
      return;
    }

    let exerciseTable;
    try {
      exerciseTable = await Exercise.get(req.params.id);

    } catch (e) {
      res.status(400).send({error: 'No existe la tabla'});
      return;
    }

    const exerciseArray = exerciseTable.exercises.filter(obj => obj.name === name);
    const exercise = exerciseArray.reduce((a,b) => a.concat(b));

    console.log('>>>', exercise);

    console.log('OOLD', exercise.name, exercise.calories, exercise.type, exercise.time);

    if(exercise.length === 0){
      res.status(403).send({error: 'No existe el ejercicio'});
      return;
    }

    if (exercise.name === newName && !calories && !type && !time) {
      res.send(exerciseTable);
      return;
    }

    if (newName) {
      exerciseTable.exercises.filter(obj => obj.name === name ? obj.name = newName : false);
    }

    if (calories) {
      exerciseTable.exercises.filter(obj => obj.calories !== calories ? obj.calories = calories : false);
    }

    if (type) {
      exerciseTable.exercises.filter(obj => obj.type !== type ? obj.type = type : false);
    }

    if (time) {
      exerciseTable.exercises.filter(obj => obj.time !== time ? obj.time = time : false);
    }

    console.log('NEEEW', exercise.name, exercise.calories, exercise.type , exercise.time);

    await exerciseTable.save();
    // send success status
    res.send(exerciseTable);
  }));
};
