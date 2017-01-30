import {thinky} from './thinky';

export const Exercise = thinky.createModel('Exercise', {
  owner: thinky.type.string().required(),
  name: thinky.type.string().required(),
  level: thinky.type.number(),
  image: thinky.type.any(),
  exercises: thinky.type.array().schema(
    thinky.type.object().schema({
      name: thinky.type.string().required(),
      calories: thinky.type.number(),
      type: thinky.type.string(),
      time: thinky.type.number(),
    })
  ).default([]),
});
