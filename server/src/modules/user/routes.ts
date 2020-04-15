import { getUsers, getSpecificUser, createUser } from "./services";

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
    path: "",
    method: "post",
    handler: [createUser],
  },
];

export default applyBaseRoute("user", routes);
