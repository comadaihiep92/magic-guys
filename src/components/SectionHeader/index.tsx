import React from "react";

type SectionHeaderProps = {
  title: string;
  desc?: string;
};

const SectionHeader = ({ title, desc }: SectionHeaderProps) => {
  return (
    <div>
      <h3 className="text-[60px] font-black font-playfair text-black">
        {title}
      </h3>
      {desc && <p className="pt-10 text-[#757575] text-sm">{desc}</p>}
    </div>
  );
};

export default SectionHeader;
