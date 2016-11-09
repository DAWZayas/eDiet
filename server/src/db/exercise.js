import {thinky} from './thinky';

export const Exercise = thinky.createModel('Exercise', {
  name: thinky.type.string().required(),
  type: thinky.type.string(),
  exercises: [{
    exercise: {
      name: thinky.type.string(),
      level: thinky.type.number(),
    },
  }],
});
