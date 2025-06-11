import { usePath, useRoutes } from "raviger";
import { useEffect } from "react";
import LayoutTheme from "./LayoutTheme";
import Home from "../pages/Home";

const routes = {
  "/": () => <Home />,
   "/agent": () => <h1>Hello my Agent page</h1>,
    "/user/:id": ({ id }) => <h1>Hello User {id}</h1>,
    "/account/:name/:number": ({ name, id }) => <h1>Hello User {name} {id}</h1>,
};

export function Router() {
  const currentPath = usePath();

 console.log('currentPath', currentPath);

  useEffect(() => {
 console.log('useEffect Router')
    window.scrollTo(0, 0);
  }, [currentPath]);

  const routeResult = useRoutes(routes);

  return <LayoutTheme>{routeResult}</LayoutTheme>;
}