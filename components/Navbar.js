import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import react, { useState } from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [state, setState] = useState(false);

  // const handleClick = () => {
  //   console.log("clicked");
  //   setActive(!active);
  // };

  return (
    <>
      <div className="fixed w-full z-50 top-0 py-3 sm:py-5 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to">
        <div className="container flex items-center justify-between">
          <div>
            <h3 className="cursor-pointer text-2xl font-bold uppercase text-white hover:text-yellow">
              <Link href="/">Rohit Singh</Link>
            </h3>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/">Home</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/about">About</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/services">Services</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/portfolio">Portfolio</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href={"/blogs"}>Blog</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  <Link href="/contact">Contact</Link>
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setState(!state)}>
              {/*  */}
              {state ? (
                <i className="bx bx-x text-4xl text-white"></i>
              ) : (
                <i className="bx bx-menu text-4xl text-white"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity ${
          state ? "block" : "hidden"
        }`}
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <Link
                href="#about"
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </Link>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Services
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Portfolio
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Blog
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
