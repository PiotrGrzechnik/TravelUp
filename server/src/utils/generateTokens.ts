const jwt = require("jsonwebtoken");

interface IGenerateTokens {
  accessToken: string;
  refreshToken: string;
}

export const generateTokens = (params: object): IGenerateTokens => {
  const secret = process.env.TOKEN_SECRET_KEY;

  const accessToken = jwt.sign(
    {
      ...params,
      type: "ACCESS_TOKEN",
    },
    secret,
    {
      expiresIn: "1h",
    }
  );

  const refreshToken = jwt.sign(
    {
      ...params,
      type: "REFRESH_TOKEN",
    },
    secret,
    {
      expiresIn: "24h",
    }
  );

  return {
    accessToken,
    refreshToken,
  };
};
