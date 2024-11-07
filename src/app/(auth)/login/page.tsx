"use client";
import React, { useState } from "react";
import show from "/public/eye-line.svg";
import hide from "/public/eye-off-line.svg";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "@/types/auth/LoginUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/scema/LoginScema";
import ConfirmCodeInput from "@/components/forRegister/ConfirmCodeInput";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "i18next";
import kaLogin from "../../../../public/locales/ka.json";
import enLogin from "../../../../public/locales/en.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { login: enLogin.login, confirm: enLogin.login.confirm },
      ka: { login: kaLogin.login, confirm: kaLogin.login.confirm },
    },
    lng: "ka",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default function Page() {
  const [type, setType] = useState(true);
  const [suc, setSuc] = useState(false);
  const [Email, setEmail] = useState("");
  const [pas, setPas] = useState("");
  const [user, setUser] = useState<ILogin>({ email: "", password: "" });
  const { t } = useTranslation("login");
  const switchLanguage = (lng: "en" | "ka") => {
    i18n.changeLanguage(lng);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(LoginSchema) });

  const inputsData: SubmitHandler<ILogin> = async (data) => {
    setEmail(data.email);
    setUser(data);
    setPas(data.password);

    const res = await fetch(
      "https://dealin-api-production.up.railway.app/api/dj-rest-auth/send-code/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        cache: "no-cache",
      }
    );
    if (res.ok) {
      setSuc(true);
    }
  };

  return (
    <div className="bg-[#C7D9FF] w-full min-h-screen flex justify-center items-center">
      <div>
        <button onClick={() => switchLanguage("en")}>English</button>
        <button onClick={() => switchLanguage("ka")}>ქართული</button>
      </div>
      {!suc ? (
        <div className="bg-[#152C5E] flex flex-col items-center gap-[50px] max-w-[570px] mx-[auto] my-[0] py-[50px] px-[24px]">
          <h1 className="text-[36px] text-[#F1F5FF] font-[600]">
            {t("login")}
          </h1>
          <form
            className="max-w-[362px] w-full flex flex-col gap-[50px]"
            onSubmit={handleSubmit(inputsData)}
          >
            <div className="w-full flex flex-col gap-[35px]">
              <div className="relative w-full">
                <input
                  type="text"
                  className={`inputsINStart outline-none w-full ${
                    errors.email?.message
                      ? "border-[2px] border-red-500"
                      : "border-[2px] border-solid border-[#c39353]"
                  }`}
                  placeholder={t("email")}
                  {...register("email")}
                />
                <span className="absolute text-red-500 text-[16px] top-[54px] left-3 font-medium des:top-[58px]">
                  {errors.email?.message}
                </span>
              </div>
              <div className="w-full relative">
                <input
                  type={type ? "password" : "text"}
                  className={`inputsINStart w-full outline-none ${
                    errors.password?.message
                      ? "border-[2px] border-red-500"
                      : "border-[2px] border-solid border-[#c39353]"
                  }`}
                  placeholder={t("password")}
                  {...register("password")}
                />
                <Image
                  src={type ? hide : show}
                  width={21}
                  height={18}
                  alt="icon"
                  className="absolute top-[30%] right-5"
                  onClick={() => setType(!type)}
                />
                <span className="absolute text-red-500 text-[16px] top-[54px] left-3 font-medium des:top-[58px]">
                  {errors.password?.message}
                </span>
              </div>
              <div className="flex items-center gap-[30px] w-full">
                <span className="text-[16px] text-[#EAEFFA] font-normal des:text-[18px]">
                  {t("noAccount")}
                </span>
                <Link
                  href="/register"
                  className="text-[17px] font-[700] underline decoration-white decoration-2 underline-offset-4 text-white leading-normal des:text-[19px]"
                >
                  {t("register")}
                </Link>
              </div>
            </div>
            <button className="bg-[#EAEFFA] rounded-[10px] text-[#152C5E] text-[15px] font-[600] des:text-[18px] py-[14px]">
              {t("loginButton")}
            </button>
          </form>
        </div>
      ) : (
        <ConfirmCodeInput email={Email} user={user} password={pas} />
      )}
    </div>
  );
}
