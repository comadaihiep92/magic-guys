import React from "react";

type TimeProp = {
  timeNum: number;
  timeName: string;
  hasColon?: boolean;
};

const Time = ({ timeName, timeNum, hasColon }: TimeProp) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p className="tracking-[4.8px] text-[36px] md:text-[60px] font-black leading-[64px] text-black font-playfair">
          {timeNum}
        </p>
        <p className="text-black text-xs md:text-base font-bold">{timeName}</p>
      </div>
      {hasColon && (
        <p className="text-[40px] md:text-[65px] text-black font-montserrat leading-[79px]">
          :
        </p>
      )}
    </>
  );
};

export default Time;
