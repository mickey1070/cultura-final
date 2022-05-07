import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
    <>
      <div>
        <nav className="px-[1rem] shadow-sm w-full">
          <div className="w-full">
            <div className="flex items-center h-20 w-full">
              <div className="flex items-center   justify-between w-full">
                <Link href={"./"}>
                  <div className="flex justify-center items-center flex-shrink-0 ">
                    <img src="/Cultura22.svg" />
                  </div>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href={"./events"}>
                      <div className="cursor-pointer hover:bg-amber-700 text-white hover:text-white px-3 py-2 rounded-md text-lg font-semibold">
                        Events
                      </div>
                    </Link>
                    <Link href={"./#AboutUs"}>
                      <div className="cursor-pointer hover:bg-amber-700 text-white hover:text-white px-3 py-2 rounded-md text-lg font-semibold">
                        About Us
                      </div>
                    </Link>

                    <div className="cursor-pointer hover:bg-amber-700  text-whitehover:text-white px-3 py-2 rounded-md text-lg font-semibold">
                      Gallery
                    </div>
                    <div className="cursor-pointer bg-white text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-amber-700 hover:text-white focus:ring-orange-300 focus:ring-4">
                      Buy Tickets
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-10 flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="  inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                >
                  <div
                    href="/home"
                    activeclassName="home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-amber-700 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </div>
                  <div
                    href="/about"
                    activeclassName="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-amber-700  text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Events
                  </div>

                  <div
                    href="/work"
                    activeclassName="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-amber-700  text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About Us
                  </div>

                  <div
                    href="/contact"
                    activeclassName="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-amber-700  text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contact
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </>
  );
}