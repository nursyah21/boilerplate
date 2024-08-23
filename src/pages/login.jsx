import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Logo } from "../components/logo";
import { SendHorizonal } from "lucide-react";

export const Login = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>login | {import.meta.env.VITE_APP}</title>
      </Helmet>
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <div className="flex gap-x-2 my-2">
          <input
            defaultValue="test"
            {...register("example")}
            className="p-2 flex-1"
            autoComplete="off"
          />
          <button type="submit">
            <SendHorizonal />
          </button>
        </div>
      </form>

      <Link to="/">index</Link>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
