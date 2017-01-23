import {Menu} from '../../db';
import {asyncRequest} from '../../util';
import passport from 'passport';

export const timeFoodTaken = async (menu, foodName, timeFoodName) => {
  // check if login already taken
  const foodsName = menu.timeFoods.filter(obj => obj.timeFood === timeFoodName ? true : false);
  if(foodsName.length>0){
  const objectFood = foodsName.reduce((a,b) => a.concat(b));
  const food = objectFood.foods.filter(obj => obj.nameFood === foodName ? true : false);
  return food.length > 0;}
  else return foodsName.length>0;
};

export default (app) => {
  app.post('/api/menu/:nameMenu/:nameTimeFood/food/add', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {

    // get Menu input
    const {nameFood, calories} = req.body;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    let menu;
    try {
      menu = await Menu;
      menu = menu.filter( ({name}) => name === req.params.nameMenu).reduce((a,b) => a.concat(b));
    } catch (e) {
      res.status(400).send({error: 'Menu or time food not found!'});
    }
    // check if Menu already taken
    const exists = await timeFoodTaken(menu, nameFood, req.params.nameTimeFood);
    if (exists) {
      res.status(403).send({error: 'Food already taken!'});
      return;
    }
    // save nameFood Menu and Food
    const t = menu.timeFoods.filter(obj => obj.timeFood === req.params.nameTimeFood ? true : false).map(obj => obj.foods.push({nameFood, calories}));

    await menu.save();

    res.sendStatus(201);
  }));
};
