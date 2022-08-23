import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/svg/logo.svg";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  // Function Show Menu
  const [showMenu, setShowMenu] = useState(false);
  const menuChangeButton = () => {
    setShowMenu(!showMenu);
  };
  return (
    <main className="2xl:flex xl:flex lg:flex justify-between">
      {/* Navbar Logo */}
      <section className="flex justify-between">
        <NavLink to="/">
          <div className="flex gap-x-3 justify-start font-bold text-3xl uppercase animate__animated animate__fadeInLeft">
            <img className="w-8" src={logo} alt="" />
            <h1 className="pt-2">Asif</h1>
          </div>
        </NavLink>

        {showMenu ? (
          <button
            className="text-sm mt-[20px] uppercase 2xl:hidden xl:hidden lg:hidden block"
            onClick={menuChangeButton}
          >
            <Icon
              className="hover:text-text ease-in duration-300 w-5 h-5"
              icon="akar-icons:circle-x-fill"
            />
          </button>
        ) : (
          <button
            className="text-sm mt-[10px] uppercase 2xl:hidden xl:hidden lg:hidden block"
            onClick={menuChangeButton}
          >
            <Icon
              className="hover:text-text ease-in duration-300 w-8 h-10"
              icon="ci:menu-alt-05"
            />
          </button>
        )}
      </section>

      {showMenu ? <NavbarMobile /> : <NavbarDesktop />}
    </main>
  );
};

export default Navbar;
