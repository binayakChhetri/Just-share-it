import { useQuery } from "@tanstack/react-query";
import { getLatestFile } from "./file";

export const useGetFile = (userId: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["files", userId],
    queryFn: ({ queryKey }) => {
      const [, userId] = queryKey;
      return getLatestFile(userId);
    },
    // ensures query only runs when userId is available
    enabled: !!userId,
  });

  return { data, error, isLoading };
};
