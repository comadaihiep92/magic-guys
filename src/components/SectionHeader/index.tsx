import React from "react";

type SectionHeaderProps = {
  title: string;
  desc?: string;
  className?: string;
};

const SectionHeader = ({ title, desc, className }: SectionHeaderProps) => {
  return (
    <div className={className}>
      <h3 className={`text-[60px] font-black font-playfair text-black`}>
        {title}
      </h3>
      {desc && <p className={`pt-10 text-[#757575] text-sm`}>{desc}</p>}
    </div>
  );
};

export default SectionHeader;
