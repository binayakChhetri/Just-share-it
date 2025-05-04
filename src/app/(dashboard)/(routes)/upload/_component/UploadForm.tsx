import { useState } from "react";
import toast from "react-hot-toast";
import FilePreview from "./FilePreview";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  function onFileSelect(file: File | null) {
    if (file && file.size > 10000000) {
      toast.error("File size exceeds 10MB limit");
      setFile(null);
      console.log(file);
      return;
    }
    setFile(file);
  }

  return (
    <form
      action=""
      className="flex flex-col gap-5  min-w-[300px] max-w-[900px] mx-auto"
    >
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-60 border-3 border-[#ff7a00] border-dashed rounded-lg cursor-pointer bg-[#ff7b0009]  hover:bg-[#ff7b0027]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-15 h-15 mb-4 text-[#ff7a00]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm sm:text-lg text-gray-500 dark:text-gray-400">
              <span className="">
                Click to <strong className="text-[#ff7a00]">upload</strong>
              </span>{" "}
              or <strong className="text-[#ff7a00]"> drag</strong> and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, GIF, DOCS, PDF (MAX. 5MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              onFileSelect(file || null);
            }}
            accept="image/svg+xml, image/png, image/jpeg, image/gif, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
        </label>
      </div>
      {file && <FilePreview file={file} onClick={() => setFile(null)} />}
      <button
        disabled={!file}
        onClick={() => console.log("Upload btn was clicked")}
        className="text-sm tracking-wide w-full max-w-[200px] mx-auto rounded-full cursor-pointer bg-[#ff7b00] disabled:bg-[#ff7b00bd] disabled:cursor-not-allowed text-white font-medium px-5 py-3"
      >
        Upload{"  "}
      </button>
    </form>
  );
};

export default UploadForm;
