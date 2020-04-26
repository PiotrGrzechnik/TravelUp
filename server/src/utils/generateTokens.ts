const jwt = require("jsonwebtoken");

interface IGenerateTokens {
  accessToken: string;
  refreshToken: string;
}

const generateTokens = (params: object): IGenerateTokens => {
  const secret = process.env.TOKEN_SECRET_KEY;

  const accessToken = jwt.sign(
    {
      ...params,
      type: "ACCESS_TOKEN",
    },
    secret,
    {
      expiresIn: "5d",
    }
  );

  const refreshToken = jwt.sign(
    {
      ...params,
      type: "REFRESH_TOKEN",
    },
    secret,
    {
      expiresIn: "20d",
    }
  );

  return {
    accessToken,
    refreshToken,
  };
};

export { generateTokens };
