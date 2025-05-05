import { useQuery } from "@tanstack/react-query";
import { getFile } from "./file";

export function useGetFile() {
  const {
    data: files,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["files"],
    queryFn: getFile,
  });

  return { files, error, isLoading };
}
