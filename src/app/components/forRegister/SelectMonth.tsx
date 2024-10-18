import { IUser } from "@/app/types/RegisterUser";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
export default function MonthSelect({
  register,
  error,
}: {
  register: UseFormRegister<IUser>;
  error: FieldErrors<IUser>;
}) {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="relative inline-block w-[100px]">
      {!selectedMonth && (
        <span className="absolute left-2 top-2 text-[#B6C8EF] pointer-events-none">
          mm
        </span>
      )}

      <select
        className={`w-full bg-[#0a2e56] text-[#B6C8EF] text-center ${
          error.month?.message
            ? "border-2 border-red-500"
            : "border-2 border-[#d9a34a]"
        } rounded-lg py-2 pl-8 pr-4 appearance-none`}
        value={selectedMonth}
        {...register("month", {
          onChange: (e) => {
            handleChange(e);
            e.target.value = e.target.value;
          },
        })}
      >
        <option value="" disabled></option>
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
