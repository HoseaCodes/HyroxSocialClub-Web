"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Feature Highlights", href: "#" },
  { name: "Download", href: "#" },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Disclosure as="nav" className="bg-white ">
      {({ open }) => (
        <>
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 sm:h-24 items-center">
              {/* logo */}
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <p className=" w-auto font-bold text-[15px] sm:text-xl   text-black font-helvetica">
                    PhysiquePro AI
                  </p>
                </div>
              </div>
              {/* menu list */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-black text-base"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* username */}
              <div className=" sm:ml-6 sm:flex hidden">
                <a
                  href="/"
                  className="font-bold text-black text-[13px] lg:text-base w-[118px] lg:w-[200px] bg-[#F1F4FF] rounded-2xl h-9 lg:h-12 flex items-center justify-center"
                >
                  Join Waitlist
                </a>
              </div>
              <div className="-mr-2 flex items-center sm:hidden gap-5">
                <div className=" sm:ml-6 ">
                  <a
                    href="/"
                    className="font-bold text-black text-[13px] lg:text-xl w-[118px] lg:w-[240px] bg-[#F1F4FF] rounded-2xl h-9 lg:h-14 flex items-center justify-center"
                  >
                    Join Waitlist
                  </a>
                </div>
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-[10px] text-white  bg-[#3B82F6] w-[34px] h-[34px]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoMdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Image
                      src="./menuIcon.svg"
                      width={34}
                      height={34}
                      className="block h-full w-full"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute h-full top-20 w-full bg-[#F1F4FF] z-10">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Disclosure
                  key={item.name}
                  href={item.href}
                  as="a"
                  className="bg-[#F1F4FF] text-black block pl-3 pr-4 py-2 text-base font-medium"
                >
                  {item.name}
                </Disclosure>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default NavBar;
