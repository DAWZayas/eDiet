import passport from 'passport';

// our packages
import {Menu} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/menu/:id/:name/food/update', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {id, name} = req.params;
    // get user input
    const {food, oldFood, calories, oldCalories} = req.body;
    // make sure text is not empty
    if (food !== undefined && !food.length && oldFood !== undefined && !oldFood.length) {
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
    const foodsName = menu.timeFoods.filter(obj => obj.timeFood === name ? true : false);
    const objectFood = foodsName.reduce((a,b) => a.concat(b));
    const existFood = objectFood.foods.filter(obj => obj.nameFood === food ? true : false);

    if(existFood.length>0){
      res.status(404).send({error: 'The timeFood alredy exist!'});
      return;
    }

    // check if oldTimeFood don't exist
    const existOldFood = objectFood.foods.filter(obj => obj.nameFood === oldFood ? true : false);

    if (existOldFood.length == 0){
      res.status(404).send({error: 'The old timeFood dont\'t exist!'});
      return;
    }

    // if not changes- just send OK
    if (!food) {
      res.send(menu.timeFoods);
      return;
    }

    if (food && oldFood) {
      const existFood = objectFood.foods.map(function (obj){

        if (obj.nameFood === oldFood ) {
          obj.nameFood = food; obj.calories = calories;
        }
      });
    }

    // try saving
    await menu.save();

    // send created question back
    res.send(menu);
  }));
};
