"use client";
import Image from "next/image";
import logo from "/public/hands.png";
import "../../globals.css";
import show from "/public/eye-line.svg";
import hide from "/public/eye-off-line.svg";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "@/types/auth/RegisterUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterScema } from "@/scema/RegisterScema";
import { IerrorsInRegister } from "@/types/auth/ErrorsInRegister";
import SelectDay from "@/components/forRegister/SelectDay";
import SelectMonth from "@/components/forRegister/SelectMonth";
import SelectYear from "@/components/forRegister/SelectYear";
import ConfirmCodeInput from "@/components/forRegister/ConfirmCodeInput";
import Radios from "@/components/forRegister/Radios";
import karegister from "../../../../public/locales/ka.json";
import enregister from "../../../../public/locales/en.json";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { register: enregister.register },
      ka: { register: karegister.register },
    },
    lng: "ka",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default function Register() {
  const { t } = useTranslation("register");
  const switchLanguage = (lng: "en" | "ka") => {
    i18n.changeLanguage(lng);
  };
  const [changeType, setChangeType] = useState(true);
  const [changeType2, setChangeType2] = useState(true);
  const [withoutErrors, setWithoutErrors] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [erorsObj, setErrorObj] = useState<IerrorsInRegister>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(RegisterScema) });

  const inputsData: SubmitHandler<IUser> = async (data) => {
    setEmail(data.email);
    const res = await fetch(
      "https://dealin-api-production.up.railway.app/api/dj-rest-auth/registration/",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-cache",
      }
    );
    console.log(res);
    if (res.ok) {
      setWithoutErrors(true);
    } else {
      const result = await res.json();
      console.log(result);
      setErrorObj(result);
    }
  };

  return (
    <div className=" cover bg-[#F1F5FF] w-full pl-[16px] pr-[16px] pt-[27px] min-h-screen flex justify-center">
      {withoutErrors ? (
        <ConfirmCodeInput email={email} user={undefined} />
      ) : (
        <div className="blue w-full bg-[#152C5E] max-w-[534px]  pt-[24px] pb-[50px]  flex justify-center h-fit ">
          <div className="inputsCon   flex  flex-col gap-[30px] justify-center items-center bg-[#152C5E] pl-[16px] pr-[16px]  w-full ">
            <div className="flex items-center gap-[14px]">
              <Image src={logo} width={48} height={37} alt="logo"></Image>
              <span className="text-white text-[40px] font-bold tracking-[1px] leading-[37px]">
                DEALIN
              </span>
            </div>
            <form
              className="w-full flex flex-col gap-[35px] max-w-[362px]"
              onSubmit={handleSubmit(inputsData)}
            >
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder={t("username")}
                  style={{
                    backgroundImage: `url("/user-line.svg")`,
                  }}
                  className={`inputsINStart w-full outline-none ${
                    errors.username?.message
                      ? "border-2 border-red-500"
                      : "border-2 border-[#d9a34a]"
                  }`}
                  {...register("username")}
                />
                {errors.username ? (
                  <span className="text-red-500 text-[15px] absolute top-[55px] left-2 des:top-[60px]">
                    {errors.username.message}
                  </span>
                ) : null}
                {erorsObj.username ? (
                  <span className="text-red-500 text-[15px] absolute top-[55px] left-2 des:top-[60px]">
                    User with this username already exists
                  </span>
                ) : null}
              </div>

              <div className="flex justify-between items-center">
                <SelectDay register={register} error={errors} />
                <SelectMonth register={register} error={errors} />
                <SelectYear register={register} error={errors} />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("email")}
                  style={{
                    backgroundImage: `url("/mail-line.svg")`,
                  }}
                  {...register("email")}
                  className={`inputsINStart w-full ${
                    errors.email?.message
                      ? "border-2 border-red-500"
                      : "border-2 border-[#d9a34a]"
                  }`}
                />
                {errors.email ? (
                  <span className="text-red-500 text-[15px] absolute top-[55px] left-2 des:top-[60px]">
                    {errors.email.message}
                  </span>
                ) : null}
                {erorsObj.email ? (
                  <span className="text-red-500 text-[15px] absolute top-[55px] left-2 des:top-[60px]">
                    User with this email already exists
                  </span>
                ) : null}
              </div>

              <div className="relative w-full">
                <input
                  type={`${changeType ? "password" : "text"}`}
                  placeholder={t("password")}
                  style={{
                    backgroundImage: `url("/key-line.svg")`,
                  }}
                  className={`inputsINStart w-full ${
                    errors.password1?.message
                      ? "border-2 border-red-500"
                      : "border-2 border-[#d9a34a]"
                  }`}
                  {...register("password1")}
                />
                {changeType ? (
                  <Image
                    src={hide}
                    width={21}
                    height={18}
                    alt="icon"
                    className="absolute top-[30%] right-5"
                    onClick={() => setChangeType(!changeType)}
                  ></Image>
                ) : (
                  <Image
                    src={show}
                    width={21}
                    height={18}
                    alt="icon"
                    className="absolute top-[30%] right-5"
                    onClick={() => setChangeType(!changeType)}
                  ></Image>
                )}
                {errors.password1 ? (
                  <span className="text-red-500 text-[15px] absolute top-[55px] left-2 des:top-[60px]">
                    {errors.password1.message}
                  </span>
                ) : null}
              </div>
              <div className="relative w-full">
                <input
                  type={`${changeType2 ? "password" : "text"}`}
                  placeholder={t("Rpassword")}
                  style={{
                    backgroundImage: `url("/key-line.svg")`,
                  }}
                  className={`inputsINStart w-full ${
                    errors.password2?.message
                      ? "border-2 border-red-500"
                      : "border-2 border-[#d9a34a]"
                  }`}
                  {...register("password2")}
                />
                {changeType2 ? (
                  <Image
                    src={hide}
                    width={21}
                    height={18}
                    alt="icon"
                    className="absolute top-[30%] right-5"
                    onClick={() => setChangeType2(!changeType2)}
                  ></Image>
                ) : (
                  <Image
                    src={show}
                    width={21}
                    height={18}
                    alt="icon"
                    className="absolute top-[30%] right-5"
                    onClick={() => setChangeType2(!changeType2)}
                  ></Image>
                )}
                {errors.password2 ? (
                  <span className="text-red-500 text-[15px] absolute top-[55px] left-2 des:top-[60px]">
                    {errors.password2.message}
                  </span>
                ) : null}
              </div>

              <div className="h-[44px] bg-[#C29252] rounded-[5px] flex items-center justify-center">
                <p className="text-[14px] text-white font-normal des:text-[18px]">
                  {t("question")}
                </p>
              </div>
              <Radios register={register} error={errors} />
              <button className="text-[#192C57] text-[15px] font-[600] bg-[#EAEFFA] rounded-[10px] py-[14px]">
                {t("button")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
