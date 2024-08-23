import { Toaster } from "react-hot-toast";
import { Index } from "./pages";
import { About } from "./pages/about";
import { Login } from "./pages/login";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


export const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/about" Component={About} />
        <Route path="/login" Component={Login} />
      </Routes>
    </>
  )
}
