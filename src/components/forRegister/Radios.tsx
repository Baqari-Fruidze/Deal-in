"use client";
import { useState } from "react";
import dolarIcon from "/public/money-dollar-circle-line.svg";
import enterpreneuerIcon from "/public/briefcase-line.svg";
import Image from "next/image";
import { IUser } from "@/types/auth/RegisterUser";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

const CustomRadioButtons = ({
  register,
  error,
}: {
  register: UseFormRegister<IUser>;
  error: FieldErrors<IUser>;
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const { t } = useTranslation("register");

  return (
    <div className="flex  justify-between relative">
      <label className="flex items-center gap-[12px] cursor-pointer">
        <input
          type="radio"
          value="entrepreneur"
          className="opacity-0 absolute"
          checked={
            selectedOption === "entrepreneur" || selectedOption === "მეწარმე"
          }
          {...register("role")}
          onChange={() => setSelectedOption("entrepreneur")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 border-[#C29252] mr-2 ${
            selectedOption === "entrepreneur"
              ? "bg-[#C29252]"
              : selectedOption === "მეწარმე"
              ? "bg-[#C29252]"
              : "bg-white"
          }`}
        ></span>
        <Image
          src={enterpreneuerIcon}
          width={15}
          height={15}
          alt="icon"
        ></Image>
        <span
          className={`text-[14px] text-[#B6C8EF] font-medium  underline ${
            selectedOption === "entrepreneur"
              ? "decoration-[#C29252]"
              : "normal"
          } `}
        >
          {t("entrepreneur")}
        </span>
      </label>
      <span className="text-[12px] text-white font-normal">{t("or")}</span>

      <label className="flex items-center gap-[12px] cursor-pointer">
        <input
          type="radio"
          value="investor"
          className="opacity-0"
          checked={
            selectedOption === "investor" || selectedOption === "ინვესტორი"
          }
          {...register("role")}
          onChange={() => setSelectedOption("investor")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 border-[#C29252] mr-2 ${
            selectedOption === "investor"
              ? "bg-[#C29252]"
              : selectedOption === "ინვესტორი"
              ? "bg-[#C29252]"
              : "bg-white"
          }`}
        ></span>
        <Image src={dolarIcon} width={15} height={15} alt="icon"></Image>
        <span
          className={`text-[14px] text-[#B6C8EF] font-medium  underline ${
            selectedOption === "investor" ? "decoration-[#C29252]" : "normal"
          } `}
        >
          {t("investor")}
        </span>
      </label>
      {error.role?.message ? (
        <span className="absolute text-[14px] text-red-500 top-5 left-0">
          {error.role.message}
        </span>
      ) : null}
    </div>
  );
};

export default CustomRadioButtons;
