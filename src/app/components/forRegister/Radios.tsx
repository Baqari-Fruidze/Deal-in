// import { useState } from "react";

// const RadioButtonGroup = () => {
//   const [selected, setSelected] = useState("");

//   const handleRadioChange = (e) => {
//     setSelected(e.target.id);
//   };

//   return (
//     <div className="flex items-center space-x-4">
//       <input
//         type="radio"
//         id="radio1"
//         name="radio"
//         className="hidden peer"
//         onChange={handleRadioChange}
//       />
//       <label
//         htmlFor="radio1"
//         className={`flex items-center justify-center w-8 h-8 border-2 border-[#c39353] rounded-full bg-white cursor-pointer ${
//           selected === "radio1" ? "bg-yellow-400" : ""
//         } transition-colors`}
//       >
//         {selected === "radio1" && "✔"} {/* Checkmark */}
//       </label>

//       <input
//         type="radio"
//         id="radio2"
//         name="radio"
//         className="hidden peer"
//         onChange={handleRadioChange}
//       />
//       <label
//         htmlFor="radio2"
//         className={`flex items-center justify-center w-8 h-8 border-2 border-[#c39353] rounded-full bg-white cursor-pointer ${
//           selected === "radio2" ? "bg-yellow-400" : ""
//         } transition-colors`}
//       >
//         {selected === "radio2" && "✔"} {/* Checkmark */}
//       </label>
//     </div>
//   );
// };

// export default RadioButtonGroup;
"use client";
import { useState } from "react";
import dolarIcon from "/public/money-dollar-circle-line.svg";
import enterpreneuerIcon from "/public/briefcase-line.svg";
import Image from "next/image";
const CustomRadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex items-center justify-between">
      {/* Entrepreneur Option */}
      <label className="flex items-center gap-[12px] cursor-pointer">
        <input
          type="radio"
          name="role"
          value="entrepreneur"
          className="hidden"
          checked={selectedOption === "entrepreneur"}
          onChange={() => setSelectedOption("entrepreneur")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 border-[#C29252] mr-2 ${
            selectedOption === "entrepreneur" ? "bg-[#C29252]" : "bg-white"
          }`}
        ></span>
        <Image
          src={enterpreneuerIcon}
          width={15}
          height={15}
          alt="icon"
        ></Image>
        <span
          className={`text-[14px] text-[#B6C8EF] font-medium  underline ${
            selectedOption === "entrepreneur"
              ? "decoration-[#C29252]"
              : "normal"
          } `}
        >
          Entrepreneur
        </span>
      </label>
      <span className="text-[12px] text-white font-normal">Or</span>

      <label className="flex items-center gap-[12px] cursor-pointer">
        <input
          type="radio"
          name="role"
          value="investor"
          className="hidden"
          checked={selectedOption === "investor"}
          onChange={() => setSelectedOption("investor")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 border-[#C29252] mr-2 ${
            selectedOption === "investor" ? "bg-[#C29252]" : "bg-white"
          }`}
        ></span>
        <Image src={dolarIcon} width={15} height={15} alt="icon"></Image>
        <span
          className={`text-[14px] text-[#B6C8EF] font-medium  underline ${
            selectedOption === "entrepreneur"
              ? "normal"
              : "decoration-[#C29252]"
          } `}
        >
          Investor
        </span>
      </label>
    </div>
  );
};

export default CustomRadioButtons;
