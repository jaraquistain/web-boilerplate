import React from "react";
import { Redirect } from "react-router-dom";

import { Home, Test, App, NotFound } from "./containers";

export default [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/test",
        component: Test
      },
      {
        path: "/redirect",
        component: () => <Redirect to="/lksdjf" />
      },
      {
        component: NotFound
      }
    ]
  }
];
