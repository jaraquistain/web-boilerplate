import React from "react";

import { Home, Test, NotFound } from "./containers";
import { getViewComponent } from "./containers/App/App";

export default [
  {
    path: "/",
    exact: true,
    component: getViewComponent(Home)
  },
  {
    path: "/test",
    component: getViewComponent(Test)
  },
  {
    path: "/bad",
    component: getViewComponent()
  },
  {
    component: NotFound
  }
];
