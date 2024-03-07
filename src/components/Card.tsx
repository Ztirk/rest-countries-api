import { useEffect, useState } from "react";
import {
  getAllFlags,
  getFlagsByName,
  getFlagsByRegion,
} from "../services/restCountriesApi";
import Span from "./Span";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "./Loading";

export default function Card() {
  const [flags, setFlags] = useState<unknown>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(flags);
  }, [flags]);

  useEffect(() => {
    getAllFlags(setFlags);
  }, []);

  useEffect(() => {
    const region = searchParams.get("region");
    const country = searchParams.get("country");

    if (region) {
      setFlags(undefined);
      getFlagsByRegion(setFlags, region);
    } else if (region == "") {
      getAllFlags(setFlags);
    }

    if (country) {
      setFlags(undefined);
      getFlagsByName(setFlags, country);
    } else if (country == "") {
      getAllFlags(setFlags);
    }
  }, [searchParams]);

  return (
    <>
      {flags ? (
        <>
          {Array.isArray(flags) ? (
            flags.map((data) => (
              <Link to={`/rest-countries-api/flag/${data.name.common}`}>
                <div
                  className={`text-dark-gray(light-mode-text) bg-white(dark-mode-text&light-mode-element) rounded-md drop-shadow-md
                            grid gap-5
                            w-72
                            dark:bg-dark-blue-element dark:text-dark-gray(light-mode-text)
                            `}
                >
                  <img
                    src={data.flags.png}
                    alt={data.flags.alt}
                    className={`rounded-t-md object-cover h-[150px] w-full`}
                  />
                  <div
                    className={`mx-6
                                  font-800
                                  text-detail-page
                                  dark:text-white(dark-mode-text&light-mode-element)`}
                  >
                    {data.name.common}
                  </div>
                  <div className={`mx-6 mb-8`}>
                    <div className="">
                      <Span>Population:</Span>{" "}
                      {data.population.toLocaleString()}
                    </div>
                    <div>
                      <Span>Region:</Span> {data.region}
                    </div>
                    <div>
                      <Span>Capital:</Span> {data.capital}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div
              className={`font-800 text-white(dark-mode-text&light-mode-element)`}
            >
              Not Found
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
