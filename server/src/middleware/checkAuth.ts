import { Request, Response, NextFunction } from "express";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const sessionId = req.cookies.sessionId;
  if (sessionId) {
    const errorMsg = {
      error: "You are not authorized to view this page",
    };
    res.send(errorMsg);
  } else {
    next();
  }
};

export default checkAuth;
