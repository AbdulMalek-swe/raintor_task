import React from "react";
import SkillCart from "@/components/card/SkillCard";
import Button from "@/components/ui/Button";
import { skillList } from "@/constants/skillList";
import { FaArrowDown ,IoIosArrowRoundForward , IoIosArrowRoundBack} from "@/icons"; 
const Skill = () => {
  return (
    <div className="">
        <div className="container mx-auto rounded-[30px] border -mt-3 bg-black  px-8 py-12 space-y-11 font-sporting">
      {/* skill header button */}
      <div className="flex">
        <span className="  border border-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
          {" "}
          <FaArrowDown className="text-xl text-white  " />
        </span>
        <Button className="p-2 text-white border !border-white">
          Why Choose me
        </Button>
      </div>
      {/* skill text area  */}
      <div className="text-white flex justify-between">
        <div className=" font-bold lg:text-[58px]   md:text-4xl sm:text-3xl text-2xl ">
          <h1 className=" text-[58px] font-bold ">
            My Extensive <br /> List of Skills
          </h1>
        </div>
        <div className="space-y-5">
          <p className="text-lg leading-[34px] font-normal text-right">
            Building the worlds best marketing Your <br /> trusted partner for
            strategy, design, and dev.
          </p>
          <hr className="bg-white" />
          <div className="flex justify-end gap-8">
            <span className="  border border-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              {" "}
              <IoIosArrowRoundBack className="text-xl text-white  " />
            </span>
            <span className="  border border-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              {" "}
              <IoIosArrowRoundForward className="text-xl text-white  " />
            </span>
          </div>
        </div>
      </div>
      {/* card design */}
      <div className="flex gap-4 md:gap-1 flex-wrap justify-center">
        {skillList.map((skill, idx) => (
          <div key={idx} className={`${idx === 1 && "rotate-[6deg]"}`}>
            <SkillCart skill={skill} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skill;
