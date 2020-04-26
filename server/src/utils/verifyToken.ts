const jwt = require("jsonwebtoken");

const verifyToken = (token: string) => {
  const secret = process.env.TOKEN_SECRET_KEY;

  const response = jwt.verify(token, secret, (err: any, decoded: object) => {
    if (!decoded) {
      return {
        isValid: false,
        message: err.message,
      };
    } else {
      return {
        isValid: true,
        data: decoded,
      };
    }
  });

  return response;
};

export { verifyToken };
