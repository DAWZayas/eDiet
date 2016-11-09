import {thinky} from './thinky';

export const Menu = thinky.createModel('Menu', {
  foods: thinky.type.array().schema(
    thinky.type.object().schema({
      food: thinky.type.object().schema({
        name: thinky.type.string().required(),
        calories: thinky.type.number(),
      }),
    }),
  ),
});
