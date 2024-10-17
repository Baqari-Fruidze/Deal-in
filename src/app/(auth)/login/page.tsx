import React from "react";
import user from "/public/user-line.svg";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-red-600">
      <Image src={user} width={15} height={15} alt="icon"></Image>
    </div>
  );
}
