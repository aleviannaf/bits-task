import { Joi, Segments, celebrate } from "celebrate";

export const createTaskValidationBodyMiddleware = celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      content: Joi.string().required()
    }),
  });