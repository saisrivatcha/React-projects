import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import Signup from "../assign8/Signup";
import Signin from "./Signin";
import Technologies from "./Technologies";

import Reactjs from "./Reactjs";
import Angular from "./Angular";
import Vue from "./Vue";

export default function App() {
  const browserRouterObject = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              path: "reactjs",
              element: <Reactjs />,
            },
            {
              path: "angular",
              element: <Angular />,
            },
            {
              path: "vue",
              element: <Vue />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={browserRouterObject} />;
}
