import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Logo } from "../components/logo";
import { SendHorizonal } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCcw } from "lucide-react";
// import { queryClient } from "../lib/query";

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

      <ExampleTanstack />

      <Link to="/">index</Link>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

function ExampleTanstack() {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const id = Math.floor(Math.random()*10)+1
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      return await response.json();
    },
  });
  // const refresh = async () =>
  //   await queryClient.refetchQueries({ queryKey: ["repoData"] });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data)
  return (
    <div className="my-2 gap-y-2">
      <div className="flex gap-x-2 justify-center">
        <h1 className="text-2xl">{data.name}</h1>
        <button onClick={refetch}>
          <RefreshCcw size={20} />
        </button>
      </div>
      <p>{data.title}</p>
    </div>
  );
}
