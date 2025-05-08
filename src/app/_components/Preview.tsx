"use client";

import { Copy, SquareChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useGetFile } from "../_services/_file/useGetLatestFile";
import { bytesToMb } from "../_utlis/fileUtlis";
import { getCurrentDate } from "../_utlis/time";
import SendEmail from "../_utlis/globalApi";
import { useAuth } from "@clerk/nextjs";

const Preview = () => {
  const { userId } = useAuth();
  const { data, error, isLoading } = useGetFile(userId || "");

  const [email, setEmail] = useState<string>("");
  if (error) {
    return <p>Something went wrong</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  let name,
    size,
    fileSize,
    path: string | number | readonly string[] | undefined;

  if (data?.length === 0) {
    return <p>No files uploaded</p>;
  }
  if (data) {
    ({ name, size, path } = data?.[0]);
    fileSize = bytesToMb(size);
  }

  const sendEmail = (data: any, e: React.FormEvent) => {
    e.preventDefault();
    const fileData = {
      emailToSend: email,
      fileName: data.name,
      fileSize: bytesToMb(data.size),
      fileType: data.type,
      url: data.path,
      sendTime: getCurrentDate(),
    };
    SendEmail(fileData).then((res) => {
      res.statusText === "OK"
        ? toast.success("Email sent successfully")
        : toast.error("Email not sent");
    });
  };

  return (
    <form
      onSubmit={(e) => sendEmail(data?.[0], e)}
      className="flex flex-col gap-5  min-w-[300px] max-w-[900px] mx-auto w-full  py-2 px-4 sm:px-6 lg:px-8"
    >
      <div>
        <Link href="/upload" className="flex gap-2 items-center text-gray-500">
          <SquareChevronLeft stroke="#6a7282 " />
          <span className="font-medium">Go to Upload</span>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 px-5 py-10 border-1 border-gray-200 rounded-lg">
        <div className="text-center px-8 py-4 grow">
          {data && <p>{name}</p>}
          <p className="text-sm text-gray-500 mt-[-3px]">
            {data && "." + name.split(".").pop()}
            {fileSize && `,  ${fileSize} MB`}
          </p>
        </div>
        <div className="flex flex-col gap-5 grow w-full sm:w-fit">
          <div className="flex flex-col relative">
            <label
              htmlFor="file-url"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              URL
            </label>
            <input
              readOnly
              value={path}
              type="text"
              id="file-url"
              placeholder="File link"
              className="w-full pl-3 pr-8 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-gray-50"
            />
            <Copy
              className="absolute right-1.5 top-9 z-10 cursor-pointer hover:scale-110"
              size={20}
              color="#c4c8d0"
              strokeWidth={1}
              onClick={() => {
                if (typeof path === "string") {
                  navigator.clipboard.writeText(path);
                  toast.success("File link copied to clipboard");
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="send-email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Send File to Email
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="send-email"
              placeholder="example@gmail.com"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-gray-50"
            />
            <button className="bg-[#ff7a00] text-white text-sm rounded-lg py-2 cursor-pointer mt-[20px]">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Preview;
