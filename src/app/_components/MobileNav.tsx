"use client";
import { Menu, MonitorUp, Paperclip, X } from "lucide-react";
import { motion } from "motion/react";
import { div } from "motion/react-client";
import Link from "next/link";
import { useState } from "react";

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

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="block md:hidden">
      {" "}
      <span onClick={() => setIsOpen(true)}>
        <Menu color="#a0aec0" className="cursor-pointer " />
      </span>
      {/* {isOpen && ({sidebarItems.map((item) => (
              <Link
                key={item.id}
                href={`/${item.to}`}
                className="uppercase flex items-center gap-3 my-3 px-4 pt-3 pb-2 border-b border-gray-100 text-gray-500"
              >
                {item.icon}
                <span className="text-sm font-medium tracking-wider hidden md:block">
                  {item.name}
                </span>
              </Link>
            ))})} */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-950 w-full h-fit p-4 absolute top-0 left-0 z-10 flex flex-col items-center justify-center"
        >
          <span
            className="absolute top-4 right-4 cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </span>
          {sidebarItems.map((item, index) => (
            <motion.li
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 * index,
              }}
              className="pb-0 m-0  list-none  w-ful flex justify-center "
            >
              <Link
                key={item.id}
                href={`/${item.to}`}
                className="uppercase flex items-center gap-3 py-4  text-white "
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="text-sm font-medium tracking-wider ">
                  {item.name}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.div>
      )}
    </div>
  );
};
export default MobileNav;
