

export default function Headbar() {
  const handleChangeTheme = () => {
    const theme = localStorage.theme;
    if (theme == "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else if (theme == "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`flex justify-between items-center
                     px-24 h-24 
                     bg-white(dark-mode-text&light-mode-element) dark:bg-dark-blue-element text-dark-blue-element dark:text-very-light-gray(light-mode-background) drop-shadow-md
                    `}
    >
      <h1 className={`font-800 text-[1.5rem]`}>Where in the world?</h1>
      <div
        className={`flex gap-2 items-center
                    cursor-pointer`}
        onClick={handleChangeTheme}
      >
        <i className="fa-regular fa-moon fa-lg" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
}
