import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useStore } from "../store";
import { Logo } from "../components/logo";

export const About = () => {
  const {count, inc} = useStore()

  return (
    <>
      <Helmet>
        <title>about | {import.meta.env.VITE_APP}</title>
      </Helmet>
      <Logo />
      <div className="card">
        <button onClick={inc}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Link to={"/"}>index</Link>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
