import { Application, Request, Response, NextFunction } from "express";

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

const applyRoutes = (routes: Route[], app: Application) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (app as any)[method](path, handler);
  }
};

export { Route, applyRoutes };
