import {thinky} from './thinky';

export const User = thinky.createModel('User', {
  login: thinky.type.string().required(),
  password: thinky.type.string().required(),
  registrationDate: thinky.type.date().default(thinky.r.now()),
  email: thinky.type.string(),
  height: thinky.type.number(),
  weight: thinky.type.array().schema(
    thinky.type.number()
  ).default([]),
  imc: thinky.type.array().schema(
    thinky.type.number()
  ).default([]),
  photo: thinky.type.buffer(),
  imcMonth: thinky.type.number(),
  weightMont: thinky.type.number(),
  exercises: thinky.type.array().schema(
    thinky.type.object().schema({
      name: thinky.type.string().required(),
    })
  ).default([]),
  menus: thinky.type.array().schema(
    thinky.type.object().schema({
      name: thinky.type.string().required(),
    })
  ).default([]),
  role: thinky.type.boolean(),

});
