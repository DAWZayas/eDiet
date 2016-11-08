import {thinky} from './thinky';

export const Lunch = thinky.createModel('Lunch', {
  foods: thinky.type.array().schema(
    thinky.type.object().schema({
      name: thinky.type.string().required(),
      calories: thinky.type.number().required(),
    })
  ),
  totalCalories: thinky.type.number().required(), // Total de calorías
});
