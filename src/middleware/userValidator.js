const userValidation = require("../validation/userValidation");

const userValidator = async (req, res, next) => {
  const payload = {
    whtsapp_number: req.body.whtsapp_number,
  };
  const { error } = userValidation.validate(payload);
  if (error)
    return res.status(401).send(`Error in user data: ${error.message}`);
  else next();
};

module.exports = userValidator;
