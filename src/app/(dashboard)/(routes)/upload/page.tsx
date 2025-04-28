"use client";
import UploadForm from "./_component/UploadForm";

const Upload = () => {
  return (
    <div className="max-w-screen-xl w-full py-2 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-10">
        Start <strong className="text-[#ff7a00]">Uploading</strong> File and{" "}
        <strong className="text-[#ff7a00]"> Just Share it</strong>
      </h2>
      <UploadForm />
    </div>
  );
};
export default Upload;
