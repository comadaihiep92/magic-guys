import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function ScrollButton() {
  const controls = useAnimation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({ rotate: 180 });
    } else {
      controls.start({ rotate: 0 });
    }
  }, [isScrolled, controls]);

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        cursor: "pointer",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: "50%",
      }}
      className="shadow-button right-[18px] bottom-6 md:right-[80px] md:bottom-[38px] z-50"
    >
      <Link href={"#home"} className="w-full h-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
