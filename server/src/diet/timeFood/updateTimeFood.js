
import passport from 'passport';

// our packages
import {Menu} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/menu/:id/timeFood/update', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {id} = req.params;
    // get user input
    const {timeFood, oldTimeFood} = req.body;
    // make sure text is not empty
    if (timeFood !== undefined && !timeFood.length && oldTimeFood !== undefined && !oldTimeFood.length) {
      res.status(400).send({error: 'Menu name should be not empty!'});
      return;
    }

    // get the menu
    const menu = await Menu.get(id);

    // check if menu exists
    if (!menu) {
      res.status(400).send({error: 'Menu not found!'});
      return;
    }

    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'Not enough rights to change the Menu!'});
      return;
    }
    // check if exist timeFood
    const existTimeFood = menu.timeFoods.filter(function(obj){
        return obj.timeFood == timeFood ? true: false
    })

    if(existTimeFood.length>0){
      res.status(404).send({error: 'The timeFood alredy exist!'});
      return;
    }

    // check if oldTimeFood don't exist
    const existOldTimeFood = menu.timeFoods.filter(function(obj){
        return obj.timeFood == oldTimeFood ? true: false
    })

    if (existOldTimeFood.length == 0){
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
          return obj.timeFood==oldTimeFood ? obj.timeFood=timeFood : false
      })
    }

    // try saving
    await menu.save();

    // send created question back
    res.send(menu);
  }));
};
