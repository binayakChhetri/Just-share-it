import { useQuery } from "@tanstack/react-query";
import { getFileById } from "./file";

export const useGetFileById = (id: number | string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["files", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return getFileById(id);
    },
    // ensures query only runs when userId is available
    enabled: !!id,
  });

  return { data, error, isLoading };
};
