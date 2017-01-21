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

    console.log(login, password, passwordRepeat, role)
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

    console.log(exists)
    if (exists) {
      res.status(403).send({error: 'User already exists!'});
      return;
    }


    console.log(roles)
    // save new user
    const user = new User({
      login,
      password: hashedPassword,
      role: roles ,
    });
    await user.save();

    res.sendStatus(201);
  }));
};
