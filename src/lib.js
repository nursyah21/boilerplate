import { useQuery, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const LINK = `https://jsonplaceholder.typicode.com/todos/${Math.floor(new Date().getTime()%10)+1}`;

export const useFetch = (link, key = "repoData") =>
  useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await fetch(link);
      return await response.json();
    },
  });
