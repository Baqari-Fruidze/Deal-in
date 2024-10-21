"use client";
import React, { useState } from "react";

export default function ConfirmCodeInput({ email }: { email: string }) {
  const [value, setValue] = useState("");
  const [clicked, setClicked] = useState<boolean>(false);
  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log();
  return (
    <div className="bg-[#152C5E] px-[16px] flex flex-col gap-8 items-center w-[400px] h-fit p-5 rounded-xl mt-[50px]">
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
        onClick={() => setClicked(true)}
      >
        confirm
      </button>
    </div>
  );
}
