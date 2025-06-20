import Image from "next/image";
import React from "react";

const SkillCart = ({ skill }) => {
  return (
    <div className="bg-white/10 rounded-[30px] w-[410px]   space-y-6 px-4 py-6 font-sporting">
      <Image
        src={skill?.image}
        alt={skill?.name}
        width={100}
        height={100}
        className="w-24 h-24 "
      />

      <h1 className="text-white font-bold text-[26px]">{skill?.name}</h1>
      <p className="font-normal leading-[27px] md:text-base text-sm text-white/80">
        {skill?.description}
      </p>
    </div>
  );
};

export default SkillCart;
