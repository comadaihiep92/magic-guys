import { CaretIcon, CheckMarkIcon } from "@/assets/svg";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

type DropdownButtonProps = {
  className?: string;
  classNameBtn?: string;
  classNameDropdown?: string;
};

export default function DropdownButton({
  className,
  classNameBtn,
  classNameDropdown,
}: DropdownButtonProps) {
  const t = useTranslations("HomePage");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLInputElement | null>(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

  const onSelectChange = (data: string) => {
    const nextLocale = data;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      ref={dropdownRef}
    >
      <button
        className={`flex items-center justify-center gap-[10px] text-white ${classNameBtn}`}
        onClick={toggleDropdown}
      >
        <Image
          width={40}
          height={40}
          src={
            localActive === "vi"
              ? "/assets/images/vn_flag.png"
              : "/assets/images/us_flag.png"
          }
          alt="flag"
        />
        <CaretIcon />
      </button>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-[156px] p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${classNameDropdown}`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => onSelectChange("vi")}
              className="w-full flex items-center gap-1"
              role="menuitem"
            >
              <div
                className={`mr-1 ${
                  localActive === "vi" ? "visible" : "invisible"
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
              onClick={() => onSelectChange("en")}
              className="w-full flex items-center gap-1"
              role="menuitem"
            >
              <div
                className={`mr-1 ${
                  localActive === "en" ? "visible" : "invisible"
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
