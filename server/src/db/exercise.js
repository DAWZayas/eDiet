import {thinky} from './thinky';

export const Exercise = thinky.createModel('Exercise', {
  name: thinky.type.string().required(),
  level: thinky.type.number(),
  exercises: thinky.type.array().schema(
    thinky.type.object().schema({
      type: thinky.type.string().required(),
      exercise: thinky.type.array().schema(
          thinky.type.object().schema({
            name: thinky.type.string().required(),
            calories: thinky.type.number().required(),
          }),
    ).default([]),
    }),
  ).default([]),
  owner: thinky.type.string().required(),
});
