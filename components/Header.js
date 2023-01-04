import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="fixed w-full z-50 top-0 py-3 sm:py-5 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to">
        <div className="container md:flex items-center justify-between">
          <div>
            <span className="cursor-pointer text-2xl font-bold uppercase text-white hover:text-yellow">
              <Link href="/">Rohit Singh</Link>
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-4xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <i className={open ? "bx bx-x" : "bx bx-menu"}></i>
          </div>
          <div className="">
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open
                  ? "top-16 opacity-100 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to"
                  : "top-[-490px]"
              } md:opacity-100 lg:opacity-100`}
            >
              <li className=" lg:pl-6 md:pl-6 md:ml-8 text-xl md:my-0 my-7">
                <span className="group cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/">Home</Link>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </span>
              </li>

              <li className="group lg:pl-0 md:pl-0 md:ml-8 text-xl md:my-0 my-7">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/about">About</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group lg:pl-0 md:pl-0 md:ml-8 text-xl md:my-0 my-7">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/services">Services</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group lg:pl-0 md:pl-0 md:ml-8 text-xl md:my-0 my-7">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/portfolio">Portfolio</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group lg:pl-0 md:pl-0 md:ml-8 text-xl md:my-0 my-7">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href={"/blogs"}>Blog</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group lg:pl-0 md:pl-0 md:ml-8 text-xl md:my-0 my-7">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/contact">Contact</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            {/* <button onClick={() => setState(!state)}>
              {state ? (
                <i className="bx bx-x text-4xl text-white"></i>
              ) : (
                <i className="bx bx-menu text-4xl text-white"></i>
              )} 
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
