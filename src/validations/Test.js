import Joi from "joi";

const createValidation = Joi.object({
  subject: Joi.string().required().min(5),
});

export default { createValidation };
