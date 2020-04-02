import { Route } from "./applyRoutes";

export const applyBaseRoute = (path: String, routes: object[]) => {
  const newRoutes = routes.map((el: Route) => {
    el.path = `/${path}${el.path}`;
    return el;
  });
  return newRoutes;
};
