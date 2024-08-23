import { createBrowserRouter } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { Login } from "./pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
