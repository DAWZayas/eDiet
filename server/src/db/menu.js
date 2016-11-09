import {thinky} from './thinky';

export const Menu = thinky.createModel('Menu', {
  name: thinky.type.string().required(),
  foods: [{
    food: {
      name: thinky.type.string(),
      calories: thinky.type.number(),
    },
  }],
});
