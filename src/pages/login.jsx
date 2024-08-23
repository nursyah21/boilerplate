import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Logo } from "../components/logo";
import { SendHorizonal } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { useFetch } from "../lib";

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
            aria-label="example"
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

      <ExampleTanstack />
    </>
  );
};

function ExampleTanstack() {
  const randomLink = `https://jsonplaceholder.typicode.com/todos/${
    Math.floor(new Date().getTime() % 10) + 1
  }`;

  const { isLoading, error, data, refetch } = useFetch(randomLink);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div className="my-2 gap-y-2">
      <div className="flex gap-x-2 justify-center">
        <h1 className="text-2xl">{data.name}</h1>
        <button
          onClick={() => {
            console.log(randomLink);
            refetch();
          }}
        >
          <RefreshCcw size={20} />
        </button>
      </div>
      <p>{data.title}</p>
    </div>
  );
}
