import { IUser } from "@/app/types/RegisterUser";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export default function DaySelect({
  register,
  error,
}: {
  register: UseFormRegister<IUser>;
  error: FieldErrors<IUser>;
}) {
  const [selectedDay, setSelectedDay] = useState("");

  const generateDays = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      days.push(day);
    }
    return days;
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="relative inline-block w-[100px]">
      {!selectedDay && (
        <span className="absolute left-2 top-2 text-[16px] text-[#B6C8EF] pointer-events-none">
          dd
        </span>
      )}

      <select
        className={`w-full bg-[#0a2e56] text-[#B6C8EF] text-center ${
          error.day?.message
            ? "border-2 border-red-500"
            : "border-2 border-[#d9a34a]"
        } rounded-lg py-2 pl-8 pr-6 appearance-none`}
        value={selectedDay}
        {...register("day", {
          onChange: (e) => {
            handleChange(e);
            e.target.value = e.target.value;
          },
        })}
      >
        <option value="" disabled></option>
        {generateDays().map((day) => (
          <option key={day} value={day}>
            {day < 10 ? `0${day}` : day}
          </option>
        ))}
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
