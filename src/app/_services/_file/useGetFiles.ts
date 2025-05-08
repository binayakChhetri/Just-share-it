import { useQuery } from "@tanstack/react-query";
import { getAllFiles } from "./file";

export function useGetFiles(userId: string) {
  const {
    data: files,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["files", userId],
    queryFn: ({ queryKey }) => {
      const [, userId] = queryKey;
      return getAllFiles(userId);
    },
  });

  return { files, error, isLoading };
}
