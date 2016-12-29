
import passport from 'passport';

// our packages
import {Menu} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/menu/:name/timeFood/update', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get user input
    const {timeFood, oldTimeFood} = req.body;

    // make sure text is not empty
    if (timeFood !== undefined && !timeFood.length && oldTimeFood !== undefined && !oldTimeFood.length) {
      res.status(400).send({error: 'Menu name should be not empty!'});
      return;
    }

    let menu;

    try {
      menu = await Menu;
      menu = menu.filter( ({name}) => name === req.params.name).reduce((a,b) => a.concat(b));
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
      return;
    }

    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'Not enough rights to change the Menu!'});
      return;
    }
    // check if exist timeFood
    const existTimeFood = menu.timeFoods.filter(function(obj){
        return obj.timeFood == timeFood ? true: false;
    });

    if(existTimeFood.length>0){
      res.status(404).send({error: 'The timeFood alredy exist!'});
      return;
    }

    // check if oldTimeFood don't exist
    const existOldTimeFood = menu.timeFoods.filter(function(obj){
        return obj.timeFood == oldTimeFood ? true: false;
    });

    if (existOldTimeFood.length === 0){
      res.status(404).send({error: 'The old timeFood dont\'t exist!'});
      return;
    }

    // if not changes- just send OK
    if (!timeFood) {
      res.send(menu.timeFoods);
      return;
    }

    if (timeFood) {
      menu.timeFoods.filter(function(obj){
          return obj.timeFood==oldTimeFood ? obj.timeFood=timeFood : false;
      });
    }

    // try saving
    await menu.save();

    // send created question back
    res.send(menu);
  }));
};
