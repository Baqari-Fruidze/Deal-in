import React from "react";
import Image from "next/image";
import dashboardIcon from "/public/dashboard.svg";

export default function page() {
  return (
    <div className="bg-[#C7D9FF] min-h-screen">
      <div className="w-[83px] h-[58px] bg-white rounded-br-[10px] flex item-center justify-center">
        <Image
          src={dashboardIcon}
          width={28}
          height={31}
          alt="dashboardIcon"
        ></Image>
      </div>
    </div>
  );
}
