"use client";
import { useGetFiles } from "@/app/_services/_file/useGetFiles";
import { useAuth } from "@clerk/nextjs";
import FilePreview from "../upload/_component/FilePreview";
import { useDeleteFile } from "@/app/_services/_file/useDeleteFile";

const page = () => {
  const { userId } = useAuth();
  const { files, error, isLoading } = useGetFiles(userId || "");
  const { fileDelete } = useDeleteFile();

  if (error) return <p>Something went wrong</p>;
  if (isLoading) return <p>Loading...</p>;

  const handleDelFile = (id: number) => {
    fileDelete(id, {
      onSuccess: (data, bucketData) => {
        console.log(data, bucketData);
      },
    });
  };

  if (files?.length === 0) return <p>No files uploaded</p>;
  return (
    <div className="max-w-screen-xl w-full h-[500px] px-4 sm:px-6 lg:px-8 overflow-y-scroll">
      {files?.map((file, index) => (
        <FilePreview
          key={index}
          file={file}
          preview={true}
          onDelete={() => handleDelFile(file.id)}
        />
      ))}
    </div>
  );
};
export default page;
