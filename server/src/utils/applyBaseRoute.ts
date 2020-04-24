import { Route } from "./applyRoutes";

const applyBaseRoute = (path: String, routes: object[]) => {
  const newRoutes = routes.map((el: Route) => {
    el.path = `/${path}${el.path}`;
    return el;
  });
  return newRoutes;
};

export { applyBaseRoute };
