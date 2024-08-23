import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useStore } from "../store";
import { Logo } from "../components/logo";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export const Index = () => {
  const { count, inc } = useStore();

  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_APP}</title>
      </Helmet>
      <Logo />
      <div className="card">
        <button onClick={inc}>count is {count}</button>
        <div className="my-2 flex-col flex gap-y-2">
          <button onClick={()=>
            Swal.fire({
              title: "The Internet?",
              text: "That thing is still around?",
              icon: "question"
            })
          }>click me to show alert</button>
          <button onClick={()=>
            toast.success("hi mom")
          }>click me to show toast</button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Link to="/about">about</Link> | <Link to="/login">login</Link>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
