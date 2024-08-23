import { createBrowserRouter } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
