import passport from 'passport';

import {Exercise} from '../db';
import {asyncRequest} from '../util';
import fs from 'fs';
import {server as serverConfig} from '../../config';

export default (app) => {
  app.post('/api/upload/picture', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {image, name, route} =  req.body;
    let base64Data;

    try {
      if (/.png/.test(name))
        base64Data = decodeURIComponent(image).replace(/^data:image\/png;base64,/, '');

      if (/.jpeg/.test(name)) {
        base64Data = decodeURIComponent(image).replace(/^data:image\/jpeg;base64,/, '');
      }

      if (/.jpg/.test(name)) {
        base64Data = decodeURIComponent(image).replace(/^data:image\/jpeg;base64,/, '');
      }

      const files = fs.readdirSync(__dirname + `/../../public/images/${route}`);
      const filesName = files.map(file => file.split('.'));
      filesName.map(file => file[0] == name.split('.')[0] ? fs.unlinkSync(__dirname + `/../../public/images/${route}/` + file[0] + '.' + file[1]) : null);

      fs.writeFileSync(__dirname + `/../../public/images/${route}/` + name, base64Data, 'base64');
      const slider = `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/static/public/images/${route}/` + name;

      res.status(201);

    } catch (e) {
      res.status(400).send({error: 'Imagen not found!'});
    }

  }));

  app.post('/api/upload/text', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {
    const {text, name} = req.body;

    try {
      const data =  decodeURIComponent(text).replace(/^data:text\/plain;base64,/, '');
      fs.writeFileSync(__dirname + `/../../public/texts/` + name, data, 'base64');
      const texts = `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/static/public/texts/` + name;

      res.status(201);

    } catch (e) {
      res.status(400).send({error: 'Text not found!'});
    }

  }));

  app.get('/api/images/:folder', asyncRequest(async (req, res) => {
    try {
      const images = fs.readdirSync(__dirname + `/../../public/images/${req.params.folder}/`);
      res.send(images);

    } catch (e) {
      res.status(400).send({error: 'Error loading carousel images'});
    }
  }));

};