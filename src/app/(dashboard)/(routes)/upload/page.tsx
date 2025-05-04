"use client";
import UploadForm from "./_component/UploadForm";

const Upload = () => {
  function handleFileUpload(file: File | null, e: React.MouseEvent) {
    e.preventDefault();
    console.log("File uploaded:", file);
    return;
  }

  return (
    <div className="max-w-screen-xl w-full py-2 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-10">
        Start <strong className="text-[#ff7a00]">Uploading</strong> File and{" "}
        <strong className="text-[#ff7a00]"> Just Share it</strong>
      </h2>
      <UploadForm handleFileUpload={handleFileUpload} />
    </div>
  );
};
export default Upload;
