"use client";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import "../../globals.css";

import SelectMonth from "@/app/components/forRegister/SelectMonth";
import SelectYear from "@/app/components/forRegister/SelectYear";
import SelectDay from "@/app/components/forRegister/SelectDay";

export default function page() {
  return (
    <div className=" cover bg-[#F1F5FF] w-full pl-[16px] pr-[16px] pt-[27px] min-h-screen">
      <div className="blue bg-[#152C5E] max-w-[534px] mx-[auto] my-[0] pt-[24px] pb-[30px] ">
        <div className="inputsCon mx-[auto] my-[0]  flex  flex-col gap-[30px] justify-center items-center bg-[#152C5E] pl-[16px] pr-[16px] max-w-[362px] ">
          <Image src={logo} width={100} height={50} alt="logo"></Image>
          <form className="w-full flex flex-col gap-[35px] max-w-[362px] ">
            <input type="text" className="custom" placeholder="example" />
            <div className="flex justify-between items-center">
              <SelectMonth />
              <SelectYear />
              <SelectDay />
            </div>

            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}
