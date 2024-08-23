import "./index.css";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
