import {thinky} from './thinky';
import {breakfast} from 'breakfast';
import {snack} from 'breakfast';
import {lunch} from 'breakfast';
import {afternoonSnack} from 'breakfast';
import {dinner} from 'breakfast';

export const Menu = thinky.createModel('Menu', {
  foods: thinky.type.array().schema(
    thinky.type.object().schema({
      breakfast: thinky.type.object(),
      snack: thinky.type.object(),
      lunch: thinky.type.object(),
      afternoonSnack: thinky.type.object(),
      dinner: thinky.type.object(),
    })
  ),
  totalCalories: thinky.type.number().required(),
});

Menu.hasOne (Breakfast, "menu", "breakfast", "breakfast");
Menu.hasOne (Snack, "menu", "snack", "snack");
Menu.hasOne (Lunch, "menu", "lunch", "lunch");
Menu.hasOne (AfternoonSnack, "menu", "afternoonSnack", "afternoonSnack");
Menu.hasOne (Dinner, "menu", "dinner", "dinner");
