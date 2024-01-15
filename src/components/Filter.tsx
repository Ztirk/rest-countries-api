import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import Backdrop from "./Backdrop";

export default function Filter() {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleClickFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    const region = e.currentTarget.id;
    setSearchParams({ region: region });
  };

  const handleDismiss = () => {
    console.log("hello");
    setDropDown((prev) => !prev);
  };

  return (
    <>
      <Backdrop active={dropDown} onDismiss={handleDismiss} />
      <div
        className={`
                  bg-white(dark-mode-text&light-mode-element) drop-shadow-md rounded-md
                  sm:w-[16.6%] max-sm:w-[55%]
                  flex justify-center items-center gap-12 max-sm:py-5
                  relative z-20
                  cursor-pointer
                  dark:text-dark-gray(light-mode-text) dark:bg-dark-blue-element
                              `}
        onClick={handleDismiss}
      >
        <p>Filter by Region</p>
        <FaChevronDown />
        <ul
          className={`absolute top-16 
                        w-full px-8 py-4
                    bg-white(dark-mode-text&light-mode-element) dark:bg-dark-blue-element rounded-md drop-shadow-md
                        flex flex-col gap-2 
                         ${dropDown ? `visible` : `invisible`}`}
        >
          {regions.map((region) => (
            <li
              className={`cursor-pointer`}
              id={region}
              onClick={handleClickFilter}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
