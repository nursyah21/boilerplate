import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useStore } from "../store";
import { Logo } from "../components/logo";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import moment from "moment";
import { useState } from "react";
import Alert from "/icons/alert.svg";

export const Index = () => {
  const { count, inc } = useStore();
  const [time, setTime] = useState();

  setTimeout(() => {
    setTime(moment().format("MMMM Do YYYY, hh:mm:ss a"));
  }, 1000);

  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_APP}</title>
      </Helmet>
      <Logo />
      <div className="card">
        <button onClick={inc}>count is {count}</button>
        <div className="my-2 flex-col flex gap-y-2">
          <button
            onClick={() =>
              Swal.fire({
                title: "The Internet?",
                text: "That thing is still around?",
                icon: "question",
              })
            }
            className="flex items-center"
          >
            <p className="flex-1">click me to show alert</p>
            <img src={Alert} alt="alert" className="w-6" />
          </button>
          <button onClick={() => toast.success("hi mom")}>
            click me to show toast
          </button>
        </div>
        <p>{time}</p>
      </div>
      <Link to="/about">about</Link> | <Link to="/login">login</Link>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
