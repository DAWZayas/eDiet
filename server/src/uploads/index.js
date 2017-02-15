import passport from 'passport';

import {Exercise} from '../db';
import {asyncRequest} from '../util';
import fs from 'fs';
import {server as serverConfig} from '../../config';

export default (app) => {
  app.post('/api/upload/picture', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    console.log(req.body)
    const {image, route} =  req.body;
    console.log('>>>>>', image, route)

    try {
      const base64Data = decodeURIComponent(image).replace(/^data:image\/png;base64,/, '');
      console.log('>>>>>>>>>>>>>', base64Data)
      fs.writeFileSync(__dirname + `/../../uploads/images/${route}/` + '1' + '.png', base64Data, 'base64');
      slider = `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/static/uploads/images` + '1' + '.png';

      res.send([slider]);
      res.sendStatus(201);

    } catch (e) {
      res.status(400).send({error: 'Imagen not found!'});
    }

  }));
};
