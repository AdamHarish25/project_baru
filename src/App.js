/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Components/Sidebar";
import Calendar from "./Components/Calendar";
import { faTachometerAltFast } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="w-screen">
      <section id="Home">
        <div className={`w-screen h-screen pt-20`}>
          <div className="w-screen mb-5 flex items-center justify-between px-10">
            <span className="font-Poppins text-lg font-light">Beranda</span>
            <div className="w-auto py-2 bg-transparent">
              <FontAwesomeIcon
                icon={faTachometerAltFast}
                className={`mr-2 text-xl`}
              />
              <span>Beranda</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-screen h-auto px-10">
            <div className="h-auto lg:h-44 px-5 py-5 max-w-6xl bg-blue-500 border-l-4 border-l-blue-800 text-white">
              <h1 className="text-xl py-2 text-bold font-Poppins">
                Selamat Datang Firdaus!
              </h1>
              <p className="text-sm">
                Kepada calon peneliti harap memperhatikan dan melengkapi
                persyaratan yang ada. Apabila anda membutuhkan bantuan atau
                informasi lebih lanjut silahkan kontak yang sudah ada.
                Terimakasih dan selamat melaksanakan penelitian di Kabupaten
                Kebumen.
              </p>
            </div>
            <div>
              <iframe
                title="Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253079.5159117989!2d109.46889365573396!3d-7.643578009917582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ab505040d2c31%3A0x3027a76e352ba90!2sKebumen%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1655803981912!5m2!1sen!2sid"
                width="400"
                height="300"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <Calendar />
          </div>
        </div>
      </section>
      <Sidebar />
    </div>
  );
}

export default App;
