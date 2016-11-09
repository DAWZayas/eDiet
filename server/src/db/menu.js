import {thinky} from './thinky';

export const Menu = thinky.createModel('Menu', {
  name: thinky.type.string().required(),
  foods: [{
    food: {
      nameFood: thinky.type.string(),
      calories: thinky.type.number(),
    },
  }],
});
