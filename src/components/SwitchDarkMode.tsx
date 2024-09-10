import { useState } from "react";

const SwitchDarkMode = () => {
  const [theme, setTheme] = useState("");
  const toggleDarkMode = () => {
    setTheme(theme ? "" : "dark");
    document.documentElement.classList.toggle("dark");
  };
  return (
    <button
      className="py-4 px-6 rounded-3xl shadow-custom outline-none dark:bg-[#1F1F1F] dark:text-white"
      onClick={toggleDarkMode}
    >
      {theme ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default SwitchDarkMode;
