const Joi = require("joi");

const validation = Joi.object({
  whtsapp_number: Joi.string().min(10).max(10).required(),
});

module.exports = validation;
