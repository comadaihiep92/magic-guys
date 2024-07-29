import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BurgerMenuIcon } from "@/assets/svg";
import { navs } from "../Header";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("HomePage");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative block lg:hidden">
      <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
        <BurgerMenuIcon />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-700 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col justify-center items-center mt-[64px] px-4">
              {navs.slice(0, 4).map((nav, index) => (
                <li key={nav.id} className="w-full">
                  <Link
                    passHref
                    onClick={handleCloseMenu}
                    className={`font-bold text-center w-full border-b border-solid border-[#EEEEEE] block p-6 uppercase text-sm text-black ${
                      index === 3 && "last:border-none"
                    }`}
                    href={nav.href}
                  >
                    {`${t(nav.name)}`}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
