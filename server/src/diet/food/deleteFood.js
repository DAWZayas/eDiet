import passport from 'passport';

// our packages
import {Menu} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.delete('/api/menu/:id/:name/food/delete', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {id, name} = req.params;
    // get user input
    const {food} = req.body;
    // make sure text is not empty
    if (food !== undefined && !food.length) {
      res.status(400).send({error: 'Food name should be not empty!'});
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
    // check if exist Food
    const foodsName = menu.timeFoods.filter(obj => obj.timeFood === name ? true : false);
    const objectFood = foodsName.reduce((a,b) => a.concat(b));
    const existFood = objectFood.foods.filter(obj => obj.nameFood === food ? true : false);

    if(existFood.length === 0){
      res.status(404).send({error: 'The timeFood don\'t exist!'});
      return;
    }

    // if not changes- just send OK
    if (!food) {
      res.send(menu.timeFoods.foods);
      return;
    }

    const deleteTimeFood = objectFood.foods.filter((obj, index) => obj.nameFood === food ? objectFood.foods.splice(index, index + 1): false);

    // try saving
    await menu.save();

    // send created question back
    res.sendStatus(204);
  }));
};
