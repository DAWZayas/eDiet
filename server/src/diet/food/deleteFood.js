import passport from 'passport';

// our packages
import {Menu} from '../../db';
import {asyncRequest} from '../../util';

export default (app) => {
  app.post('/api/menu/:nameMenu/:nameTimeFood/food/delete', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get user input
    const {food} = req.body;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    // make sure text is not empty
    if (food !== undefined && !food.length) {
      res.status(400).send({error: 'Fields should be not empty!'});
      return;
    }

    // get the menu
    let menu;

    try {
      menu = await Menu;
      menu = menu.filter( ({name}) => name === req.params.nameMenu).reduce((a,b) => a.concat(b));
    } catch (e) {
      res.status(400).send({error: 'Menu not found!'});
    }

    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'Not enough rights to change the Menu!'});
      return;
    }
    // check if exist Food
    const foodsName = menu.timeFoods.filter(obj => obj.timeFood === req.params.nameTimeFood ? true : false);
    const objectFood = foodsName.reduce((a,b) => a.concat(b));
    const existFood = objectFood.foods.filter(obj => obj.nameFood === food ? true : false);

    if(existFood.length === 0){
      res.status(404).send({error: 'TimeFood not found!'});
      return;
    }

    // if not changes- just send OK
    if (!food) {
      res.send(menu.timeFoods.foods);
      return;
    }

    const deleteTimeFood = objectFood.foods.filter((obj, index) => obj.nameFood === food
          ? objectFood.foods.splice(index, index + 1): false);

    // try saving
    await menu.save();

    // send created question back

    res.send(objectFood.foods);

  }));
};
