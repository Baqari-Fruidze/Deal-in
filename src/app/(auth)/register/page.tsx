"use client";
import Image from "next/image";
import logo from "/public/logo.jpg";
import "../../globals.css";
import dolarIcon from "/public/money-dollar-circle-line.svg";
import enterpreneuerIcon from "/public/briefcase-line.svg";
import SelectMonth from "@/app/components/forRegister/SelectMonth";
import SelectYear from "@/app/components/forRegister/SelectYear";
import SelectDay from "@/app/components/forRegister/SelectDay";
import Radios from "@/app/components/forRegister/Radios";

export default function page() {
  return (
    <div className=" cover bg-[#F1F5FF] w-full pl-[16px] pr-[16px] pt-[27px] min-h-screen">
      <div className="blue bg-[#152C5E] max-w-[534px] mx-[auto] my-[0] pt-[24px] pb-[30px] ">
        <div className="inputsCon mx-[auto] my-[0]  flex  flex-col gap-[30px] justify-center items-center bg-[#152C5E] pl-[16px] pr-[16px] max-w-[362px] ">
          <Image src={logo} width={100} height={50} alt="logo"></Image>
          <form className="w-full flex flex-col gap-[35px] max-w-[362px] ">
            <input
              type="text"
              placeholder="username"
              style={{
                backgroundImage: `url("/user-line.svg")`,
              }}
              className={``}
            />
            <div className="flex justify-between items-center">
              <SelectMonth />
              <SelectYear />
              <SelectDay />
            </div>
            <input
              type="text"
              placeholder="email"
              style={{
                backgroundImage: `url("/mail-line.svg")`,
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                backgroundImage: `url("/key-line.svg")`,
              }}
            />
            <input
              type="password"
              placeholder="Repeat Password"
              style={{
                backgroundImage: `url("/key-line.svg")`,
              }}
            />
            <div className="h-[44px] bg-[#C29252] rounded-[5px] flex items-center justify-center">
              <p className="text-[14px] text-white font-normal des:text-[18px]">
                Who Are You?
              </p>
            </div>
            {/* <div className="flex justify-between items-center">
              <div className="flex gap-[12px] items-center">
                <input type="radio" name="role" className="bg-red-700" />
                <Image
                  src={enterpreneuerIcon}
                  width={15}
                  height={15}
                  alt="icon"
                ></Image>
                <span className="text-[14px] text-[#B6C8EF] font-medium des:text-[18px] underline">
                  Entrepreneur
                </span>
              </div>
              <span className="text-[12px] text-white font-normal">Or</span>
              <div className="flex gap-[12px] items-center">
                <input type="radio" name="role" />
                <Image
                  src={enterpreneuerIcon}
                  width={15}
                  height={15}
                  alt="icon"
                ></Image>
                <span className="text-[14px] text-[#B6C8EF] font-medium des:text-[18px] underline">
                  Investor
                </span>
              </div>
            </div> */}
            <Radios />
            <button className="text-[#192C57] text-[15px] font-[600] bg-[#EAEFFA] rounded-[10px] py-[14px]">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
