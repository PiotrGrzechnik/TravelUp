import { getUsersList, getUser, loginUser, createUser } from "./services";

import { applyBaseRoute } from "../../utils";

const routes = [
  {
    path: "/list",
    method: "get",
    handler: [getUsersList],
  },
  {
    path: "/:id",
    method: "get",
    handler: [getUser],
  },
  {
    path: "/login",
    method: "post",
    handler: [loginUser],
  },
  {
    path: "/register",
    method: "post",
    handler: [createUser],
  },
];

export default applyBaseRoute("user", routes);
