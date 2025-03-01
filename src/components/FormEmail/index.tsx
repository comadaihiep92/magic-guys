import { ArrowNextIcon } from "@/assets/svg";
import { useTranslations } from "next-intl";
import React from "react";

type FormEmailProps = {
  className?: string;
};

const FormEmail = ({ className }: FormEmailProps) => {
  const t = useTranslations("HomePage")
  return (
    <form
      className={`relative ${className ? "text-white" : "text-black"}`}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className={`px-[14px] w-full py-[18px] rounded-lg text-sm pr-12 ${className}`}
        type="email"
        placeholder={t('common.email_placeholder')}
      />
      <button className="absolute top-0 right-0 w-10 h-full flex items-center cursor-pointer">
        <ArrowNextIcon />
      </button>
    </form>
  );
};

export default FormEmail;
