import {thinky} from './thinky';

const User = thinky.createModel('User', {
  name: thinky.type.string().required(),
  surname: thinky.type.string(),
  weight: thinky.type.number().required(),
  height: thinky.type.number().required(),
  age: thinky.type.number().integer().required(),
  email: thinky.type.string().email().required(),
  login: thinky.type.string().required(),
  password: thinky.type.string().alphanum().required(),
  registrationDate: thinky.type.date().default(thinky.r.now()),
});

export default User;
