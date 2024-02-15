import { Joi, Segments, celebrate } from "celebrate";

export const sessionValidationBodyMiddleware = celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required()
    }),
  });