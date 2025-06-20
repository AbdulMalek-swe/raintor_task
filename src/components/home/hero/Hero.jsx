import React from "react";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "@/icons";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="bg-[url(/image/hero.png)] h-[888px]   bg-cover bg-no-repeat b ">
      <div className="container mx-auto pt-48 font-sporting ">
        {/* hero text  */}
        <div className=" font-bold lg:text-[78px] lg:leading-[126px] md:text-4xl sm:text-3xl text-2xl ">
          <h1 className="">
            Trusted{" "}
            <span className="text-white bg-black rounded-md p-1">Partner</span>{" "}
            for{" "}
          </h1>
          <h1 className="py-8">
            Your Website{" "}
            <span className="text-white bg-black rounded-md p-1">Develop.</span>
          </h1>
        </div>
        {/* hero summary  */}
        <div className="relative flex justify-center   ">
          <div className="text-black items-center text-lg font-normal leading-[33px] space-y-10">
            <div>
              <p className="">
                Building the worlds best marketing websites for over a decade.
              </p>
              <p className="">
                Your trusted partner for strategy, design, and dev.
              </p>
            </div>
            {/* call button  */}
            <div className="relative">
              <Button className="py-4 pr-2 pl-[46px] font-normal">
                Schedule a Call
              </Button>
              <span className="absolute top-1/2 -translate-y-1/2 left-0 border rounded-full w-[38px] h-[38px] flex items-center justify-center">
                {" "}
                <FaPhoneAlt className="text-2xl" />
              </span>
            </div>
            {/* social media icon  */}
            <div className="md:absolute md:-rotate-90 top-7 -left-10 space-y-5">
              <p>@williamrey</p>
              <div className="flex gap-4 items-center">
                <span className="w-11 border-2 border-black"></span>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
