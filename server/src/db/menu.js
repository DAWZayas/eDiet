import {thinky} from './thinky';

export const Menu = thinky.createModel('Menu', {
  name: thinky.type.string().required(),
  timeFoods: thinky.type.array().schema(
    thinky.type.object().schema({
      timeFood: thinky.type.string().required(),
      foods: thinky.type.array().schema(
          thinky.type.object().schema({
            nameFood: thinky.type.string().required(),
            calories: thinky.type.number().required(),
          }),
    ).default([]),
    }),
  ).default([]),
  owner: thinky.type.string().required(),
});
