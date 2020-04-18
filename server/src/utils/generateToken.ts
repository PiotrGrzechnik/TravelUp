const jwt = require("jsonwebtoken");

export const generateToken = (args: object) => {
  console.log(process.env.TOKEN_SECRET_KEY, args);
  const token = jwt.sign(args, process.env.TOKEN_SECRET_KEY);

  return token;
};
