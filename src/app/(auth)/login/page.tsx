"use client";
import React, { useState } from "react";
import show from "/public/eye-line.svg";
import hide from "/public/eye-off-line.svg";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "@/types/auth/LoginUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginScema } from "@/scema/LoginScema";
import ConfirmCodeInput from "@/app/components/forRegister/ConfirmCodeInput";
export default function Page() {
  const [type, setType] = useState(true);
  const [suc, setSuc] = useState<boolean>(false);
  const [Email, setEmail] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(LoginScema) });

  const inputsData: SubmitHandler<ILogin> = async (data) => {
    setEmail(data.email);
    console.log(data);
    const res = await fetch(
      "https://dealin-api-production.up.railway.app/api/dj-rest-auth/send-code/",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-cache",
      }
    );
    if (res.ok) {
      setSuc(true);
    } else {
    }
  };
  return (
    <div className="bg-[#C7D9FF] w-full min-h-screen flex justify-center items-center">
      {!suc ? (
        <div className="bg-[#152C5E] flex flex-col items-center gap-[50px] max-w-[570px] mx-[auto] my-[0] py-[50px] px-[24px]">
          <h1 className="text-[36px] text-[#F1F5FF] font-[600]">Log In</h1>
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
                  placeholder="email"
                  style={{
                    backgroundImage: `url("/user-line.svg")`,
                  }}
                  {...register("email")}
                />
                <span className="absolute text-red-500 text-[16px] top-[54px] left-3 font-medium des:top-[58px]">
                  {errors.email?.message}
                </span>
              </div>

              <div className="w-full relative">
                <input
                  type={`${type ? "password" : "text"}`}
                  className={`inputsINStart w-full  outline-none ${
                    errors.password?.message
                      ? "border-[2px] border-red-500"
                      : "border-[2px] border-solid border-[#c39353]"
                  }`}
                  placeholder="password"
                  style={{
                    backgroundImage: `url("/key-line.svg")`,
                  }}
                  {...register("password")}
                />
                {type ? (
                  <Image
                    src={hide}
                    width={21}
                    height={18}
                    alt="icon"
                    className="absolute top-[30%] right-5"
                    onClick={() => setType(!type)}
                  ></Image>
                ) : (
                  <Image
                    src={show}
                    width={21}
                    height={18}
                    alt="icon"
                    className="absolute top-[30%] right-5"
                    onClick={() => setType(!type)}
                  ></Image>
                )}
                <span className="absolute text-red-500 text-[16px] top-[54px] left-3 font-medium des:top-[58px]">
                  {errors.password?.message}
                </span>
              </div>

              <div className="flex items-center gap-[30px] w-full">
                <span className="text-[16px] text-[#EAEFFA] font-normal des:text-[18px]">
                  Don t have an account?
                </span>
                <Link
                  href={"/register"}
                  className="text-[17px] font-[700] underline decoration-white decoration-2 underline-offset-4 text-white leading-normal des:text-[19px]"
                >
                  Register now
                </Link>
              </div>
            </div>

            <button className="bg-[#EAEFFA] rounded-[10px] text-[#152C5E] text-[15px] font-[600] des:text-[18px] py-[14px]">
              Login
            </button>
          </form>
        </div>
      ) : (
        <ConfirmCodeInput email={Email} />
      )}
    </div>
  );
}
