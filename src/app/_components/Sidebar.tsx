"use client";

import { MonitorUp, Paperclip } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    id: 1,
    name: "Upload",
    to: "upload",
    icon: <MonitorUp size={20} />,
  },
  {
    id: 2,
    name: "Files",
    to: "files",
    icon: <Paperclip size={20} />,
  },
];

const Sidebar = () => {
  const pathname = usePathname().split("/")[1];

  return (
    <aside className="hidden md:flex h-screen w-20 md:w-50 flex-col justify-between border-e border-gray-100 bg-white row-span-full">
      <div>
        <Link href="/">
          <div className="flex h-[88px] items-center justify-center">
            <Image
              src="./logo.svg"
              width={50}
              height={50}
              alt="Just share it logo"
            />
          </div>
        </Link>

        <div className="border-t border-gray-100">
          <div>
            {sidebarItems.map((item) => (
              <Link
                key={item.id}
                href={`/${item.to}`}
                className={`uppercase flex items-center gap-3 my-3 px-4 pt-3 pb-2 border-b border-gray-100 
                ${pathname === item.to ? "text-[#ff7a00]" : "text-gray-500"}`}
              >
                {item.icon}
                <span className="text-sm font-medium tracking-wider hidden md:block">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
