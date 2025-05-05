import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadFile } from "./file";
import toast from "react-hot-toast";

export const useUploadFile = () => {
  const queryClient = useQueryClient();

  const { mutate: fileUpload, status } = useMutation({
    mutationFn: ({ file, userId }: { file: File; userId: string }) =>
      uploadFile(file, userId),
    onSuccess: () => {
      toast.success("File uploaded successfully");
      queryClient.invalidateQueries({
        queryKey: ["files"],
      });
    },
    onError: () => {
      toast.error("File upload failed");
    },
  });

  return { fileUpload, status };
};
