import React from "react";
import { navList } from "@/constants/navbarLinkList";
import Link from "next/link";
import Button from "../ui/Button";
import { IoIosArrowRoundForward } from "@/icons";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[114px]">
          <h1 className="font-bwgradual font-extrabold lg:text-[34px] text-black lg:leading-[34px] md:text-xl md:leading-6 text-xl leading-5">
            DEVLOP.ME
          </h1>
          <div className="flex items-center md:gap-5 sm:gap-3 gap-2 font-sporting font-normal">
            {navList.map((link, idx) => (
              <Link
                href={"#abdout"}
                key={link?.name}
                className=" md:text-base md:leading-4 text-sm leading-3.5 text-black cursor-pointer "
              >
                {link?.name}
              </Link>
            ))}
            <div className="relative ml-4">
              <Button className="py-4 pr-2 pl-[46px]">Start Project</Button>
              <span className="absolute top-1/2 -translate-y-1/2 left-0 border rounded-full w-[38px] h-[38px] flex items-center justify-center">
                {" "}
                <IoIosArrowRoundForward className="text-4xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
