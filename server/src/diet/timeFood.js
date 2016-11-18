import {Menu, thinky, r} from '../db';
import {asyncRequest} from '../util';

export const timeFoodTaken = async (id, name) => {
  // check if login already taken
  const timeFoodsName = await r.db('expertsdb').table('Menu').filter({id}).getField('timeFoods').filter(function (timeFoods) {
  	return timeFoods("timeFood").contains(name);}).run();
  return timeFoodsName.length > 0;
};

export default (app) => {
  app.post('/api/menu/:id/timeFood/add', asyncRequest(async (req, res) => {
    // get Menu input
    const {timeFood} = req.body;
    // get row that contain nameFood
    const menu = await Menu.get(req.params.id);
    // check if Menu already taken
    const exists = await timeFoodTaken(req.params.id, timeFood);
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
