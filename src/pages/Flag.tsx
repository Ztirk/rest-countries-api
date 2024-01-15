import { useEffect, useState } from "react";
import { getBorders, getFlagsByName } from "../services/restCountriesApi";
import Headbar from "../components/Headbar";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Span from "../components/Span";
import Loading from "../components/Loading";

export default function Flag() {
  const [flag, setFlag] = useState<unknown>();
  const [borders, setBorders] = useState<string[]>();

  const country = location.pathname.split("/")[2];

  useEffect(() => {
    getFlagsByName(setFlag, country);
  }, [country]);

  useEffect(() => {
    if (flag)
      getBorders(
        setBorders,
        Array.isArray(flag) && flag[0].borders
          ? Object.values(flag[0].borders)
          : []
      );
  }, [flag]);

  return (
    <Container
      className={`w-screen h-screen 
      bg-very-light-gray(light-mode-background) dark:bg-very-dark-blue(dark-mode-background)
      `}
    >
      <Headbar />
      <Container
        className={`px-24
                  bg-very-light-gray(light-mode-background) 
                  dark:bg-very-dark-blue(dark-mode-background)`}
      >
        <Container className={`my-16`}>
          <Link to="..">
            <div
              className={`flex gap-2 justify-center items-center
                          w-28 h-10
                            bg-white(dark-mode-text&light-mode-element) drop-shadow-md rounded-md
                            dark:bg-dark-blue-element dark:text-dark-gray(light-mode-text)`}
            >
              <i className="fa-solid fa-arrow-left-long" />
              <p>Back</p>
            </div>
          </Link>
        </Container>
        {flag && Array.isArray(flag) ? (
          <>
            <Container
              className={`sm:grid grid-cols-2 gap-36 
              max-sm:flex max-sm:flex-col max-sm:gap-8
              dark:text-dark-gray(light-mode-text)`}
            >
              <img src={flag[0].flags.png} className={`w-full`} />
              <div
                className={`sm:grid grid-cols-2 sm:items-center
                              max-sm:flex max-sm:flex-col max-sm:gap-7`}
              >
                <div
                  className={`font-800 text-[30px]
                                dark:text-white(dark-mode-text&light-mode-element)`}
                >
                  {flag[0].name.common}
                </div>
                <div
                  className={`col-start-1 row-start-2
                flex flex-col gap-2`}
                >
                  <div>
                    <Span>Native Name</Span>{" "}
                    {Object.values(flag[0].name.nativeName as object)[0].common}
                  </div>
                  <div>
                    <Span>Population: </Span>
                    {flag[0].population}
                  </div>
                  <div>
                    <Span>Region: </Span>
                    {flag[0].region}
                  </div>
                  <div>
                    <Span>Sub Region: </Span>
                    {flag[0].subregion}
                  </div>
                  <div>
                    <Span>Capital: </Span>
                    {flag[0].capital}
                  </div>
                </div>
                <div
                  className={`col-start-2 row-start-2
                flex flex-col gap-2`}
                >
                  <div>
                    <Span>Top Level Domain</Span>
                    {flag[0].tld[0]}
                  </div>
                  <div>
                    <Span>Currencies: </Span>
                    {Object.values(flag[0].currencies as object)[0].name}
                  </div>
                  <div>
                    <Span>Languages: </Span>
                    {Object.values(flag[0].languages).join(", ")}
                  </div>
                </div>
                <div
                  className={`col-span-2 row-start-3 
                  sm:grid grid-cols-[auto_1fr] gap-3 items-center
                  `}
                >
                  <Span>Border Countries: </Span>

                  <div
                    className={`flex flex-wrap gap-2
                    
                    text-dark-gray(light-mode-text)`}
                  >
                    {borders
                      ? borders.map((border) => (
                          <div
                            className={`bg-white(dark-mode-text&light-mode-element) w-32 h-10 drop-shadow-md rounded-sm
                                        flex justify-center items-center
                                        dark:bg-dark-blue-element`}
                          >
                            {border}
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </Container>
          </>
        ) : (
          <Loading />
        )}
      </Container>
    </Container>
  );
}
