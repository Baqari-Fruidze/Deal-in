"use client";
import React, { useState } from "react";
import show from "/public/eye-line.svg";
import hide from "/public/eye-off-line.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [changeType, setChangeType] = useState(true);
  return (
    <div className="bg-[#C7D9FF] w-full min-h-screen ">
      <div className="bg-[#152C5E] flex flex-col items-center gap-[50px] max-w-[570px] mx-[auto] my-[0] py-[50px] px-[24px]">
        <h1 className="text-[36px] text-[#F1F5FF] font-[600]">Log In</h1>
        <form className="max-w-[362px] w-full flex flex-col gap-[50px]">
          <div className="w-full flex flex-col gap-[25px]">
            <input
              type="text"
              className="w-full"
              placeholder="username"
              style={{
                backgroundImage: `url("/user-line.svg")`,
              }}
            />
            <div className="w-full relative">
              <input
                type={`${changeType ? "password" : "text"}`}
                className="w-full"
                placeholder="password"
                style={{
                  backgroundImage: `url("/key-line.svg")`,
                }}
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
            <div className="flex items-center gap-[30px]">
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
    </div>
  );
}
