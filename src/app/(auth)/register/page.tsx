"use client";
import Image from "next/image";
import logo from "/public/logo.jpg";
import "../../globals.css";
import show from "/public/eye-line.svg";
import hide from "/public/eye-off-line.svg";
import SelectMonth from "@/app/components/forRegister/SelectMonth";
import SelectYear from "@/app/components/forRegister/SelectYear";
import SelectDay from "@/app/components/forRegister/SelectDay";
import Radios from "@/app/components/forRegister/Radios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "@/types/auth/RegisterUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterScema } from "@/scema/RegisterScema";
import ConfirmCodeInput from "@/app/components/forRegister/ConfirmCodeInput";
import { IerrorsInRegister } from "@/types/auth/ErrorsInRegister";

export default function Register() {
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
        <ConfirmCodeInput email={email} />
      ) : (
        <div className="blue w-full bg-[#152C5E] max-w-[534px]  pt-[24px] pb-[50px]  flex justify-center h-fit ">
          <div className="inputsCon   flex  flex-col gap-[30px] justify-center items-center bg-[#152C5E] pl-[16px] pr-[16px]  w-full ">
            <Image src={logo} width={100} height={50} alt="logo"></Image>
            <form
              className="w-full flex flex-col gap-[35px] max-w-[362px]"
              onSubmit={handleSubmit(inputsData)}
            >
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="username"
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
                  placeholder="email"
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
                  placeholder="Password"
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
                  placeholder="Repeat Password"
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
                  Who Are You?
                </p>
              </div>
              <Radios register={register} error={errors} />
              <button className="text-[#192C57] text-[15px] font-[600] bg-[#EAEFFA] rounded-[10px] py-[14px]">
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
