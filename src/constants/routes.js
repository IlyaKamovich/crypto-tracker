import { Coins, NotFound } from "Pages";

const ROUTES = [
  {
    exact: true,
    path: "/",
    component: Coins,
  },
  {
    exact: false,
    path: "*",
    component: NotFound,
  },
];

export { ROUTES };
