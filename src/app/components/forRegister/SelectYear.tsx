import { useState } from "react";

export default function YearSelect() {
  const [selectedYear, setSelectedYear] = useState("");

  // Generate an array of years from the current year to 1900
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year > 1900; year--) {
      years.push(year);
    }
    return years;
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="relative inline-block w-[100px]">
      {!selectedYear && (
        <span className="absolute left-2 top-2 text-[#B6C8EF] pointer-events-none">
          yy
        </span>
      )}

      <select
        className="w-full bg-[#0a2e56] text-[#B6C8EF] text-center border-2 border-[#d9a34a] rounded-lg py-2 pl-8 pr-6 appearance-none"
        value={selectedYear}
        onChange={handleChange}
      >
        <option value="" disabled></option>
        {generateYears().map((year) => (
          <option key={year} value={year}>
            {year}
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
