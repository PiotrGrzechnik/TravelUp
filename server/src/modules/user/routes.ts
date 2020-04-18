import { getUsers, getSpecificUser, loginUser, createUser } from "./services";

import { applyBaseRoute } from "../../utils";

const routes = [
  {
    path: "",
    method: "get",
    handler: [getUsers],
  },
  {
    path: "/:id",
    method: "get",
    handler: [getSpecificUser],
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
