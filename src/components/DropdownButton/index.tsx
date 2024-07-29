import { CaretIcon, CheckMarkIcon } from "@/assets/svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

export default function DropdownButton() {
  const t = useTranslations('HomePage')
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(2);
  const dropdownRef = useRef<HTMLInputElement | null>(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const handleOptionClick = (option: number) => {
    startTransition(() => {
      router.replace(option === 1 ? "vi" : "en");
    });
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current?.contains(event?.target as Node)
    ) {
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
          src={
            selectedOption === 1
              ? "/assets/images/vn_flag.png"
              : "/assets/images/us_flag.png"
          }
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
            <button
              onClick={() => handleOptionClick(1)}
              className="w-full flex items-center gap-1"
              role="menuitem"
            >
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
            <button
              onClick={() => handleOptionClick(2)}
              className="w-full flex items-center gap-1"
              role="menuitem"
            >
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
