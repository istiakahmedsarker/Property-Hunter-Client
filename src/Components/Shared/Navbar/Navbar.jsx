"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const pages = (
    <>
      <li>
        <Link
          className={`link ${pathname === "/" ? "text-[#eb6753]" : ""
            } no-underline`}
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li className="dropdown dropdown-hover">
        <Link
          className={`link ${pathname === "/properties" ? "text-[#eb6753]" : ""
            } no-underline`}
          href={"/properties"}
        >
          Properties
        </Link>
      </li>
      <li>
        <Link
          className={`link ${pathname === "/blog" ? "text-[#eb6753]" : ""
            } no-underline`}
          href={"/blogs"}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          className={`link ${pathname === "/blog" ? "text-[#eb6753]" : "inline-block md:hidden"
            } no-underline`}
          href={"/"}
        >
          Add Property
        </Link>
      </li>
    </>
  );

  return (
    <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500" >
      <div className="navbar py-4 bg-[#10141d] text-gray-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {pages}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <h3>Property-Hunter</h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{pages}</ul>
        </div>
        <div className="navbar-end">
          <button className="px-5 border-2 border-[#eb6753] md:border-none md:hover:border-2  md:hover:border-[#eb6753] rounded-full text-sm hover:bg-[#eb6753]  md:bg-none py-2 text-gray-50 ">Login/Register</button>
          <button className="px-5 py-2 hidden md:block rounded-full ml-2 text-sm hover:border-[#eb6753] text-gray-50 border-2 border-gray-200 hover:bg-[#eb6753]">
            Add Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
