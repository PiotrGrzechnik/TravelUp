import express, { Application } from "express";
const i18next = require("i18next");
const i18nextMiddleware = require("i18next-express-middleware");
const Backend = require("i18next-node-fs-backend");

import { applyRoutes, applyMiddleware } from "./utils";
import allRoutes from "./modules/allRoutes";
import commonMiddleware from "./middleware/common";
import { i18nextConfig } from "./locales";

const app: Application = express();

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(i18nextConfig);

app.use(i18nextMiddleware.handle(i18next));

applyMiddleware(commonMiddleware, app);
applyRoutes(allRoutes, app);

export default app;
