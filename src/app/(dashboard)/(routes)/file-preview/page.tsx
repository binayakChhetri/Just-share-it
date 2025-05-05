import { SquareChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-5  min-w-[300px] max-w-[900px] mx-auto w-full  py-2 px-4 sm:px-6 lg:px-8">
      <div>
        <Link href="/upload" className="flex gap-2 items-center text-gray-500">
          <SquareChevronLeft stroke="#6a7282 " />
          <span className="font-medium">Go to Upload</span>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-10 px-5 py-10 border-1 border-gray-200 rounded-lg">
        <div className="text-center px-8 py-4 grow">
          <p>File name</p>
          <p>File type and size</p>
        </div>
        <div className="flex flex-col gap-5 grow w-full sm:w-fit">
          <div className="flex flex-col">
            <label
              htmlFor="file-url"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              URL
            </label>
            <input
              type="text"
              id="file-url"
              placeholder="File link"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-gray-50"
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
    </div>
  );
};

export default page;
