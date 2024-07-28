import React from "react";

type CountProps = {
  title: string;
  count: string;
  unit?: string;
  className?: string;
};

const Count = ({ count, unit, title, className }: CountProps) => {
  return (
    <div className={className}>
      <h4 className="text-[44px] md:text-[80px] text-[#079BEE] font-bold">
        {count}
        {unit && <span className="text-[20px] md:text-[40px]">{unit}</span>}+
      </h4>
      <p className="text-black font-bold mt-1 text-2xl">{title}</p>
    </div>
  );
};

export default Count;
