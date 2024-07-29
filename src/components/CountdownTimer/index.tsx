import { useCountdown } from "@/hooks/useCountdown";
import React from "react";
import Time from "../Time";
import { useTranslations } from "next-intl";

type CountdownTimerProps = {
  targetDate: number;
};
const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const t = useTranslations("HomePage");

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className="px-4 flex justify-center">
      <div className="mt-[38px] md:mt-[21px] justify-center w-full mb-10 md:mb-[97px] bg-white rounded-[21px] px-[26px] py-6 md:px-[39px] md:py-[26px] max-w-[756px] flex gap-1 md:gap-[52px]">
        <Time timeName={t("banner.days")} timeNum={days} hasColon />
        <Time timeName={t("banner.hours")} timeNum={hours} hasColon />
        <Time timeName={t("banner.minutes")} timeNum={minutes} hasColon />
        <Time timeName={t("banner.second")} timeNum={seconds} />
      </div>
    </div>
  );
};

export default CountdownTimer;
