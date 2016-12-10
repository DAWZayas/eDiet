import {Menu} from '../../db';
import {asyncRequest} from '../../util';

export const timeFoodTaken = async (menu, name) => {
  // check if login already taken
  const timeFoodsName = menu.timeFoods.filter(obj => obj.timeFood === name ? true :false);
  console.log(timeFoodsName);
  return timeFoodsName.length > 0;
};

export default (app) => {
  app.post('/api/menu/:id/timeFood/add', asyncRequest(async (req, res) => {
    // get Menu input
    const {timeFood} = req.body;
    // get row that contain nameFood
    try{
    const menu = await Menu.get(req.params.id);
    menu.timeFoods.push({
      timeFood,
    });
    const exists = await timeFoodTaken(menu, timeFood);
    await menu.save();
    res.sendStatus(201);
    }
    catch (e){

      res.status(403).send({error: 'Time food already exists!'});
    }
  }));
};
