import {thinky} from './thinky';

export const User = thinky.createModel('User', {
  login: thinky.type.string().required(),
  password: thinky.type.string(),
  registrationDate: thinky.type.date().default(thinky.r.now()),
  email: thinky.type.string(),
  height: thinky.type.number(),
  weight: thinky.type.array().schema(
    thinky.type.number()
  ).default([]),
  imc: thinky.type.array().schema(
    thinky.type.number()
  ).default([]),
  menusExerises: thinky.type.object().schema({
    menus: thinky.type.array().default([]),
    exercises: thinky.type.array().default([]),
  }).default({}),
  imcMonth: thinky.type.number(),
  weightMont: thinky.type.number(),
  role: thinky.type.boolean(),

});
