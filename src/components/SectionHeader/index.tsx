"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  desc?: string;
  className?: string;
};

const SectionHeader = ({ title, desc, className }: SectionHeaderProps) => {
  const control = useAnimation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef);
  const textVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className={className}>
      <motion.div
        ref={wrapperRef}
        variants={textVariants}
        initial="hidden"
        animate={control}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeInOut",
          delay: 0.05,
        }}
      >
        <h3
          className={`text-[40px] md:text-[60px] font-black font-playfair text-black`}
        >
          {title}
        </h3>
      </motion.div>

      {desc && (
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={control}
          transition={{
            type: "tween",
            duration: 0.7,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <p className={`pt-4 md:pt-10 text-[#757575] text-sm`}>{desc}</p>{" "}
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeader;
