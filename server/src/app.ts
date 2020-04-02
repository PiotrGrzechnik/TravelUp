import express, { Application } from "express";

import { applyRoutes, applyMiddleware } from "./utils";
import allRoutes from "./modules/allRoutes";
import middleware from "./middleware";

const app: Application = express();

applyMiddleware(middleware, app);
applyRoutes(allRoutes, app);

export default app;
