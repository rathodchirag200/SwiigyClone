import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    

      {/* Header */}
      <header className="shadow-xl sticky top-0 p-[12px] z-50 bg-white">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          {/* Left Side: Logo & Location */}
          <div className="flex items-center gap-2">
            <img src="swiigy2.png" alt="logo" className="w-[50px]" />
            <div className="tracking-tight font-medium hover:text-orange-500">
              Surat, Gujarat, India
            </div>
            <SlArrowDown
              className="pt-1 cursor-pointer"
              onClick={showMenu}
              title="Open Menu"
            />
          </div>

          {/* Right Side: Navigation (Desktop only) */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            <li className="flex gap-2 items-center text-[17px] cursor-pointer hover:text-orange-500">
              <CiSearch />
              <span>Search</span>
            </li>
            <li className="flex gap-2 items-center text-[17px] cursor-pointer hover:text-orange-500">
              <MdOutlineLocalOffer />
              <span>Offers</span>
            </li>
            <li className="flex gap-2 items-center text-[17px] cursor-pointer hover:text-orange-500">
              <IoHelpBuoyOutline />
              <span>Help</span>
            </li>
            <li className="flex gap-2 items-center text-[17px] cursor-pointer hover:text-orange-500">
              <VscAccount />
              <span>Sign In</span>
            </li>
            <li className="flex gap-2 items-center text-[17px] cursor-pointer hover:text-orange-500">
              <FiShoppingCart />
              <span>Cart</span>
            </li>
          </ul>
           <li className="hover:text-black list-none bg-orange-600 text-white  p-2 w-[120px] flex items-center justify-center rounded-2xl text-xl font-bold md:hidden">
              Sign in
            </li>
        </div>
      </header>
    </>
  );
};
