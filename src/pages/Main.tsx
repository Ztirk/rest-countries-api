import { useEffect } from "react";
import Headbar from "../components/Headbar";
import Container from "../components/Container";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Card from "../components/Card";

export default function Main() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, []);

  return (
    <Container
      className={`h-screen w-screen bg-very-light-gray(light-mode-background) 
      dark:bg-very-dark-blue(dark-mode-background)`}
    >
      <Headbar />
      <Container className="bg-very-light-gray(light-mode-background) dark:bg-very-dark-blue(dark-mode-background)">
        <Container
          className={`flex sm:justify-between max-sm:flex-col max-sm:gap-6
                      px-24 py-12
                    `}
        >
          <Search />
          <Filter />
        </Container>
        <Container
          className={`flex flex-wrap gap-x-16 gap-y-20 justify-center
                      px-24`}
        >
          <Card />
        </Container>
      </Container>
    </Container>
  );
}
