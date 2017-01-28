// our packages
import {User} from '../db';
import {hash, asyncRequest} from '../util';

export const loginTaken = async (login) => {
  // check if login already taken
  const users = await User;
  const user = users.filter(obj => obj.login === login);
  return user.length > 0;
};

export default (app) => {
  app.post('/api/register', asyncRequest(async (req, res) => {
    // get user input
    const {login, password, passwordRepeat, role} = req.body;
      let roles;
      role ? roles = true :roles = false

      if (password !== passwordRepeat) {
        res.status(400).send({error: 'Passwords do not match!'});
        return;
      }
      // hash password
      const hashedPassword = hash(password);

      // check if login already taken
      const exists = await loginTaken(login);

      if (exists) {
        res.status(403).send({error: 'User already exists!'});
        return;
      }

      // save new user
      const user = new User({
        login,
        password: hashedPassword,
        role: roles ,
      });
      await user.save();

      res.sendStatus(201);
  }));

app.post('/api/register/facebook', asyncRequest(async (req, res) => {
  const {id, userLogin} = req.body;

  try {
    const bbddUser = await User.get(id);
    if (bbddUser.length === 0) {
      const user = new User({
        login: userLogin,
        id: id,
        registrationDate: new Date(),
        password: hash(userLogin)
      });

      await user.save();
      res.sendStatus(201);
    }
  } catch (e) {
    res.status(400).send({error: 'An error has been happened!'});
  }
}));

app.post('/api/register/google', asyncRequest(async (req, res) => {
  const {id, userLogin} = req.body;

  try {
    const bbddUser = await User.get(id);
    if (bbddUser.length === 0) {
      const user = new User({
        login: userLogin,
        id: id,
        registrationDate: new Date(),
        password: hash(userLogin)
      });

      await user.save();
      res.sendStatus(201);
    }
  } catch (e) {
    res.status(400).send({error: 'An error has been happened!'});
  }
}));

};
