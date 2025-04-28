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
  return (
    <div className="block md:hidden">
      {" "}
      <span onClick={() => setIsOpen(true)}>
        <Menu color="#a0aec0" className="cursor-pointer " />
      </span>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-[#ff9c40] w-full h-full p-4 absolute top-0 left-0 z-10 flex flex-col items-center justify-center"
        >
          <span
            className="absolute top-4 right-4 cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </span>
          {sidebarItems.map((item, index) => (
            <motion.li
              key={index}
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
