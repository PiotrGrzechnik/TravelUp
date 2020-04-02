import { Router } from "express";
import cors from "cors";
import parser from "body-parser";

const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export { handleCors, handleBodyRequestParsing };
