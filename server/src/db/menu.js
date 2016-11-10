import {thinky} from './thinky';

export const Menu = thinky.createModel('Menu', {
  name: thinky.type.string().required(),
  foods: [
    {
    nameFood: thinky.type.string().required(),
    food: {
      nameFoods: thinky.type.string(),
      calories: thinky.type.number(),
      },
    }
  ],
});
