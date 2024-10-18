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
import { IUser } from "@/app/types/RegisterUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterScema } from "@/scema/RegisterScema";

export default function Register() {
  const [changeType, setChangeType] = useState(true);
  const [changeType2, setChangeType2] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(RegisterScema) });
  console.log(errors);

  const inputsData: SubmitHandler<IUser> = async (data) => {
    console.log(data);
    const res = await fetch(
      "https://dealin-api.onrender.com/api/dj-rest-auth/registration/",

      {
        method: "POST", // Specify the HTTP method
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(data), // Convert form data to JSON
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      console.log(res);
      // Handle HTTP errors
      const errorData = await res.json();
      console.error("Error:", errorData);
    } else {
      const result = await res.json();
      console.log("Success:", result);
    }
  };

  return (
    <div className=" cover bg-[#F1F5FF] w-full pl-[16px] pr-[16px] pt-[27px]  flex justify-center">
      <div className="blue w-full bg-[#152C5E] max-w-[534px]  pt-[24px] pb-[30px]  flex justify-center ">
        <div className="inputsCon   flex  flex-col gap-[30px] justify-center items-center bg-[#152C5E] pl-[16px] pr-[16px] max-w-[362px] w-full ">
          <Image src={logo} width={100} height={50} alt="logo"></Image>
          <form
            className="w-full flex flex-col gap-[35px] max-w-[362px]"
            onSubmit={handleSubmit(inputsData)}
          >
            <input
              type="text"
              placeholder="username"
              style={{
                backgroundImage: `url("/user-line.svg")`,
              }}
              className={`inputsINStart outline-none ${
                errors.username?.message
                  ? "border-2 border-red-500"
                  : "border-2 border-[#d9a34a]"
              }`}
              {...register("username")}
            />
            <div className="flex justify-between items-center">
              <SelectMonth register={register} error={errors} />
              <SelectYear register={register} error={errors} />
              <SelectDay register={register} error={errors} />
            </div>
            <input
              type="text"
              placeholder="email"
              style={{
                backgroundImage: `url("/mail-line.svg")`,
              }}
              {...register("email")}
              className={`inputsINStart ${
                errors.email?.message
                  ? "border-2 border-red-500"
                  : "border-2 border-[#d9a34a]"
              }`}
            />
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
            </div>

            <div className="h-[44px] bg-[#C29252] rounded-[5px] flex items-center justify-center">
              <p className="text-[14px] text-white font-normal des:text-[18px]">
                Who Are You?
              </p>
            </div>
            <Radios register={register} error={errors} watch={watch} />
            <button className="text-[#192C57] text-[15px] font-[600] bg-[#EAEFFA] rounded-[10px] py-[14px]">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
