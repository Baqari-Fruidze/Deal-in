"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Congrats from "./Congrats";
import { ILogin } from "@/types/auth/LoginUser";

export default function ConfirmCodeInput({
  email,
  user,
}: {
  email: string;
  user: ILogin;
}) {
  const [value, setValue] = useState("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [eror, setEror] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const path = usePathname();
  console.log(email);

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const router = useRouter();
  const inputData = async () => {
    setClicked(true);

    if (path === "/register") {
      const res = await fetch(
        "https://dealin-api-production.up.railway.app/api/dj-rest-auth/registration/account-confirm-email/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            code: value,
          }),
          cache: "no-cache",
        }
      );

      if (res.ok) {
        setSuccess(true);
      } else {
        setEror(true);
      }
    } else {
      const res = await fetch(
        "https://dealin-api-production.up.railway.app/api/dj-rest-auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            code: value,
          }),
          cache: "no-cache",
        }
      );
      console.log(await res.json());
      if (res.ok) {
        router.push("user-dashboard");
      } else {
        setEror(true);
      }
    }
  };
  // const res = await signIn("credentials", { ...data, redirect: false });
  // console.log(res);
  // if (res?.ok) {
  //   setSuc(true);
  // }
  return (
    <>
      {success ? (
        <Congrats setSuccess={setSuccess} />
      ) : (
        <div className="bg-[#152C5E] px-[16px] flex flex-col gap-8 items-center w-[400px] h-fit p-5 rounded-xl mt-[50px] relative">
          <h1 className="text-white text-[20px] font-normal text-center">
            Please enter the code, sent to your email
          </h1>
          <input
            type="text"
            className={`inputsINStart w-full ${
              value.length === 0 && clicked
                ? "border-2 border-red-500"
                : "border-2 border-[#d9a34a]"
            } `}
            onChange={inputValue}
          />
          <button
            className="bg-white py-[14px] text-[#152C5E] text-[18px] font-medium w-full rounded-lg"
            onClick={inputData}
          >
            confirm
          </button>
          {eror ? (
            <span className="text-red-500 text-[15px] absolute top-[135px] left-5 des:top-[143px]">
              Please enter valid code
            </span>
          ) : null}
        </div>
      )}
    </>
  );
}
