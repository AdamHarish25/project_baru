/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faAddressBook,
  faBars,
  faBook,
  faEdit,
  faTachometerAltFast,
  faTachometerFast,
  faUserCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <header className="inset-x-0 duration-300 py-2 px-10 fixed top-0 flex items-center justify-between shadow-none mb-10 text-white bg-blue-700">
          <div className={`${isOpen ? "block" : "hidden"}`}></div>
          {!isOpen ? (
            <div className={`w-60 bg-blue-700 transform`}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 font-bold text-xl rounded-md hover:shadow-md"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <a href="#" className="ml-2 font-Poppins font-bold text-xl">
                SISPER
              </a>
            </div>
          ) : (
            <div
              className={`w-60 px-5 py-2 z-10 bg-blue-700 fixed top-0 -left-1 transform duration-300 ease-in-out`}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 mr-2 font-bold text-xl rounded-md hover:shadow-md"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <a href="#" className="ml-2 font-Poppins font-bold text-xl">
                SISPER
              </a>
            </div>
          )}

          <div className="w-32 ml-5 py-2 bg-blue-700 flex justify-end">
            <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-xl" />
            <span>Firdaus</span>
          </div>

          <aside
            className={`inset-y-0 -left-1 fixed bg-gray-800 shadow-md py-16 w-60 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } duration-300 ease-in-out`}
          >
            <ul className="list-none space-y-6">
              <li>
                <div className="font-bold font-Poppins text-xs text-gray-500 bg-black py-2 px-2 w-60">
                  <p>MAIN NAVIGATION</p>
                </div>
              </li>
              <li className="mx-4">
                <a
                  href="#"
                  className="text-white hover:text-gray-400 border-l-2 border-l-blue-500 hover:py-2 transform duration-300 px-5"
                >
                  <FontAwesomeIcon
                    icon={faTachometerAltFast}
                    className="mr-2"
                  />
                  <span className="ml-2">Beranda</span>
                </a>
              </li>
              <li className="mx-4 justify-start">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transform duration-300 mt-10 px-5"
                >
                  <FontAwesomeIcon icon={faEdit} className="mr-2" />
                  <span className="ml-2">Form Pengajuan</span>
                </a>
              </li>
              <li className="mx-4 justify-start">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transform duration-300 mt-10 px-5"
                >
                  <FontAwesomeIcon icon={faBook} className="mr-2" />
                  <span className="ml-2">Lihat Berkas</span>
                </a>
              </li>
              <li className="mx-4 justify-start">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transform duration-300 mt-10 px-5"
                >
                  <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                  <span className="ml-2">Hubungi Kami</span>
                </a>
              </li>
            </ul>
          </aside>
        </header>
      </div>
    </>
  );
}
