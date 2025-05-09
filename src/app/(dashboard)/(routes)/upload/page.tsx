"use client";
import { useUploadFile } from "@/app/_services/_file/useUploadFile";
import UploadForm from "./_component/UploadForm";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Upload = () => {
  const { fileUpload, status } = useUploadFile();
  const { userId } = useAuth();
  const router = useRouter();

  async function handleFileUpload(file: File | null, e: React.MouseEvent) {
    e.preventDefault();
    if (file && userId) {
      fileUpload(
        { file, userId },
        {
          onSuccess: (data) => {
            console.log("File uploaded successfully", data);
            router.push(`/file-preview/${data.id}`);
          },
        }
      );
    }
    return;
  }

  return (
    <div className="max-w-screen-xl w-full py-2 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-10">
        Start <strong className="text-[#ff7a00]">Uploading</strong> File and{" "}
        <strong className="text-[#ff7a00]"> Just Share it</strong>
      </h2>
      <UploadForm handleFileUpload={handleFileUpload} status={status} />
    </div>
  );
};
export default Upload;
