import React from "react";
import logo from "/public/hands.png";
import burger from "/public/icon-hamburger.svg";
import Image from "next/image";
import dealinText from "/public/dealinText.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#152C5E] p-[16px]">
      <div className="flex gap-[14px] items-center">
        <Image src={logo} width={48} height={37} alt="icon"></Image>
        <Image src={dealinText} width={133} height={37} alt="text"></Image>
      </div>
      <Image src={burger} width={28} height={28} alt="burger icon"></Image>
    </div>
  );
}
