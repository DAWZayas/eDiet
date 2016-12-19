import {Menu} from '../../db';
import {asyncRequest} from '../../util';
import passport from 'passport';

export const timeFoodTaken = async (menu, name) => {
  // check if login already taken
  const timeFoodsName = menu.timeFoods.filter(obj => obj.timeFood === name ? true :false);
  console.log(timeFoodsName);
  return timeFoodsName.length > 0;
};

export default (app) => {
  app.post('/api/menu/:id/timeFood/add', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    // get Menu input
    const {timeFood} = req.body;
    let menu;
    // get row that contain nameFood
    try {
      menu = await Menu.get(req.params.id);
    } catch (e) {
      res.status(400).send({error: 'Menu does not exist'});
      return;
    }

    if (req.user.id !== menu.owner) {
      res.status(403).send({error: 'Not enough rights to add the Menu!'});
      return;
    }

    // check if Menu already taken
    const exists = await timeFoodTaken(menu, timeFood);
    if (exists) {
      res.status(403).send({error: 'Time food already exists!'});
      return;
    }
    // save nameFood Menu and Food
    menu.timeFoods.push({
      timeFood,
    });

    await menu.save();

    res.sendStatus(201);
  }));
};
