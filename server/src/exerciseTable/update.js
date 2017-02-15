// npm packages
import passport from 'passport';

// our packages
import {Exercise} from '../db';
import {asyncRequest} from '../util';

export default (app) => {
  app.post('/api/exercise/update/:name', passport.authenticate('jwt', {session: false}), asyncRequest(async (req, res) => {  // eslint-disable-line max-len
    const {newName, level} = req.body;
    let table;
    let tables;

    if (req.user.role === false) {
      res.status(403).send({error: 'Not enough rights to do this action!'});
      return;
    }

    try {
      console.log('>>>', level);
      tables = await Exercise;
      table = tables.filter(table => table.name === req.params.name).reduce((a,b) => a.concat(b));
      if (req.user.id !== table.owner) {
        res.status(403).send({error: 'Not enough rights to do this action!'});
        return;
      }

      if (!newName && !level) {
        res.send(table);
        return;
      }

      if (level) {
        table.level = level;
      }

      if (newName) {
        table.name = newName;
      }

      await table.save();
      res.send(table);

    } catch (e) {
      res.status(400).send({error: 'Table not found!'});

    }
  }));
};
