import { getUser, getSpecificUser } from "./services";

import { applyBaseRoute } from "../../utils";

const routes = [
  {
    path: "",
    method: "get",
    handler: [getUser]
  },
  {
    path: "/:id",
    method: "get",
    handler: [getSpecificUser]
  }
];

export default applyBaseRoute("user", routes);
