"use client";
import { useState } from "react";
// import { BsCode, BsCodeSquare } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { CustomButton } from ".";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => setIsOpen(!isOpen);
  const handleCloseNavbar = () => setIsOpen((prev) => !prev);

  return (
    <header className="text-gray-700 border-b border-gray-200">
      <nav className="container mx-auto flex flex-row p-5 justify-between">
        <Link
          href="/"
          className="flex items-center font-medium text-gray-900 mb-2 md:mb-0"
        >
          <FaCode className="w-10 h-10 text-white p-2 bg-black rounded-full text-lg" />
          <span className="ml-3 text-xl">KodeCraft</span>
        </Link>
        {/* menu */}
        <ul className="hidden md:flex gap-6 items-center text-base justify-center">
          <li>
            <Link
              href={"#home"}
              className="hover:text-black hove:text-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#about"}
              className="hover:text-black hove:text-semibold"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={"#services"}
              className="hover:text-black hove:text-semibold"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href={"#team"}
              className="hover:text-black hove:text-semibold"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className="hover:text-black hove:text-semibold"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CustomButton - Register */}
        <div className="hidden md:block">
          <CustomButton
            title="SignUp "
            containerStyle={`bg-black text-white text-base py-2 px-4 focus:outline-none rounded-full hover:bg-gray-700 tracking-wide`}
          />
        </div>

        {/*Hamburger */}
        <button className="block md:hidden text-slate-900" onClick={handleNav}>
          {isOpen ? <AiOutlineClose size={25} /> : <HiMenuAlt3 size={25} />}
        </button>
      </nav>

      {/*Mobile Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } container mx-auto md:hidden flex-col pl-8 gap-3 pb-5`}
      >
        <Link href="#home" onClick={handleCloseNavbar}>
          Home
        </Link>
        <Link href="#about" onClick={handleCloseNavbar}>
          About Us
        </Link>
        <Link href="#services" onClick={handleCloseNavbar}>
          Services
        </Link>
        <Link href="#team" onClick={handleCloseNavbar}>
          Team
        </Link>
        <Link href="#contact" onClick={handleCloseNavbar}>
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
