import { CaretIcon, CheckMarkIcon } from "@/assets/svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(2);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className="flex items-center justify-center gap-[10px]"
        onClick={toggleDropdown}
      >
        <Image
          width={40}
          height={40}
          src={"/assets/images/us_flag.png"}
          alt="flag"
        />
        <CaretIcon />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[156px] p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button className="w-full flex items-center gap-1" role="menuitem">
              <div
                className={`mr-1 ${
                  selectedOption === 1 ? "visible" : "invisible"
                }`}
              >
                <CheckMarkIcon />
              </div>
              <Image
                width={40}
                height={40}
                src={"/assets/images/vn_flag.png"}
                alt="flag"
              />
              <span className="text-[10px] font-bold">Vietnamese</span>
            </button>
            <hr className="border border-solid border-[#C4C4C4]" />
            <button className="w-full flex items-center gap-1" role="menuitem">
              <div
                className={`mr-1 ${
                  selectedOption === 2 ? "visible" : "invisible"
                }`}
              >
                <CheckMarkIcon />
              </div>
              <Image
                width={40}
                height={40}
                src={"/assets/images/us_flag.png"}
                alt="flag"
              />
              <span className="text-[10px] font-bold">English</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
