import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../utils/theme";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleClick = () => {
    const isDark = currentTheme === "dark";
    setTheme(isDark ? "light" : "dark");
  };
  return (
    <header className="shadow-sm h-[50px] bg-white dark:bg-dark-el sticky top-0 grid place-items-center z-20">
      <div className="w-[90%] flex items-center justify-between">
        <p className="font-nunito-sans font-extrabold text-base md:text-lg dark:text-white text-black">
          Where in the world?
        </p>

        <button
          className="flex items-center text-sm dark:text-white text-black"
          onClick={handleClick}
        >
          {currentTheme === "dark" ? (
            <>
              <IoSunnyOutline size={20} className="mx-2" />
              Light Mode
            </>
          ) : (
            <>
              <IoMoonOutline size={20} className="mx-2" />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
