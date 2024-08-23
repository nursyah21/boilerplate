import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";



createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
