import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const country = e.currentTarget.value;
    if (e.key == "Enter") setSearchParams({ country: country });
    console.log(searchParams);
  };

  return (
    <div
      className={`bg-white(dark-mode-text&light-mode-element) dark:bg-dark-blue-element drop-shadow-md rounded-md
                  dark:text-white(dark-mode-text&light-mode-element) 
                  py-5 sm:w-[37.5%]
                   flex items-center`}
    >
      <i className="fa-solid fa-magnifying-glass px-7 " />
      <input
        className={`w-full h-full
                  dark:bg-dark-blue-element
                  mr-5
                      `}
        placeholder="Search for a country..."
        onKeyDown={handleEnterSearch}
      />
    </div>
  );
}
