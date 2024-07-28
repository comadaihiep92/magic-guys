import React from "react";

type CountProps = {
  title: string;
  count: string;
  unit?: string;
};

const Count = ({ count, unit, title }: CountProps) => {
  return (
    <div>
      <h4 className="text-[80px] text-[#079BEE] font-bold">
        {count}
        {unit && <span className="text-[40px]">{unit}</span>}+
      </h4>
      <p className="text-black font-bold mt-1 text-2xl">{title}</p>
    </div>
  );
};

export default Count;
