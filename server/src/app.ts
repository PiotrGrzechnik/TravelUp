import express, { Application } from "express";

import { applyRoutes, applyMiddleware } from "./utils";
import allRoutes from "./modules/allRoutes";
import commonMiddleware from "./middleware/common";

const app: Application = express();

applyMiddleware(commonMiddleware, app);
applyRoutes(allRoutes, app);

export default app;
