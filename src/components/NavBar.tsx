import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./../assets/logotTab.svg";
import SwitchDarkMode from "./SwitchDarkMode";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <nav className="max-w-xl mx-auto py-4 px-48 flex justify-between items-center">
      <div className="flex gap-2 ">
        <img src={logo} alt="logo" />
        <span className="font-inter text-[20px] font-semibold leading-[16.2px] text-left dark:text-white">
          FinBiz
        </span>
      </div>
      <ul className="flex gap-4 dark:text-[#9B9CA1] ">
        <li>
          <a href="#"> Product</a>
        </li>
        <li className="flex gap-1 cursor-pointer justify-center items-center">
          <a href="#">
            Pages <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </li>
        <li>
          <a href="#">Integrations</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
      </ul>
      <SwitchDarkMode />
    </nav>
  );
};

export default NavBar;
