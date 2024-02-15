import { Joi, Segments, celebrate } from "celebrate";

export const validatedParamsMiddleware = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  });