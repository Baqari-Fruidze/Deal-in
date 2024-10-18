import React from "react";
import user from "/public/user-line.svg";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-[#C7D9FF] w-full min-h-screen ">
      <div className="bg-[#152C5E] flex flex-col items-center gap-[50px] max-w-[570px] mx-[auto] my-[0] py-[50px] px-[24px]">
        <h1 className="text-[36px] text-[#F1F5FF] font-[600]">Log In</h1>
        <form className="max-w-[362px]">
          <div>
            <input type="text" className="w-full" />
            <input type="text" className="w-full" />
            <div></div>
          </div>
          <button></button>
        </form>
      </div>
    </div>
  );
}
