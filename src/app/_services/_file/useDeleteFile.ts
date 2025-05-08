import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFile } from "./file";
import toast from "react-hot-toast";

export const useDeleteFile = () => {
  const queryClient = useQueryClient();

  const { mutate: fileDelete, status } = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["files"],
      });
      toast.success("File deleted successfully");
    },
    onError: () => {
      toast.error("File could not be deleted");
    },
  });

  return { fileDelete, status };
};
