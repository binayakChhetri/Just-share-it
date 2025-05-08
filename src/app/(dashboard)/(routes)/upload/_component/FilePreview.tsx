import { bytesToMb } from "@/app/_utlis/fileUtlis";
import { File as FileLogo, X as Close, Trash2, Loader } from "lucide-react";

const FilePreview = ({
  file,
  onClick,
  preview,
}: {
  file: File;
  onClick?: () => void;
  preview?: boolean;
}) => {
  const { name: fileName, size: fileSize } = file;

  return (
    <div
      className={`relative flex items-center gap-2 p-2 border-1 border-[#ff7b00] rounded-sm ${preview ? "mb-3" : ""}`}
    >
      <FileLogo fill="none" stroke="#ff7b00" strokeWidth={0.5} size={40} />
      <div className="text-[#2e2e2e]">
        <h2 className="text-sm">{fileName}</h2>
        <h2 className="text-xs">{bytesToMb(fileSize)}MB</h2>
      </div>

      {preview ? (
        <>
          <Trash2
            className="absolute right-2 cursor-pointer"
            size={20}
            stroke="#ff7b00"
            strokeWidth={2}
            onClick={onClick}
          />
        </>
      ) : (
        <>
          <Close
            className="absolute right-2 cursor-pointer"
            size={20}
            stroke="#ff7b00"
            strokeWidth={2}
            onClick={onClick}
          />
        </>
      )}
    </div>
  );
};
export default FilePreview;
//
