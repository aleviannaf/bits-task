import { Joi, Segments, celebrate } from "celebrate";

export const taskValidationBodyMiddleware = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string(),
        content: Joi.string(),
      }).or('title', 'content').required(),
  });