import { Joi, Segments, celebrate } from "celebrate";

export const userValidationBodyMiddleware = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required()
    }),
  });