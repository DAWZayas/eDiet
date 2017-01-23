import passport from 'passport';

// our packages
import {Menu} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/menu/:name/timeFood/delete',  passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {timeFood} = req.body;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    // make sure text is not empty
    if (timeFood !== undefined && !timeFood.length) {
      res.status(400).send({error: 'Menu name should be not empty!'});
      return;
    }
    let menu;
    // get the menu
    try {
      menu = await Menu;
      menu = menu.filter( ({name}) => name === req.params.name).reduce((a,b) => a.concat(b));
    } catch (e) {
      res.status(400).send({error: 'Menu not found'});
      return;
    }

    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'Not enough rights to change the Menu!'});
      return;
    }
    // check if exist timeFood
    const existTimeFood = menu.timeFoods.filter(obj => obj.timeFood == timeFood ? true : false);

    if(existTimeFood.length == 0){
      res.status(403).send({error: 'TimeFood not found!'});
      return;
    }

    // if not changes- just send OK
    if (!timeFood) {
      res.send(menu.timeFoods);
      return;
    }

    const deleteTimeFood = menu.timeFoods.filter((obj, index) => obj.timeFood == timeFood
      ? menu.timeFoods.splice(index, index + 1) : true);

    // try saving
    await menu.save();

    // send created question back
    res.sendStatus(204);
  }));
};
