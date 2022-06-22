/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Components/Sidebar";
import Calendar from "./Components/Calendar";
import Footer from "./Components/Footer";
import { faTachometerAltFast } from "@fortawesome/free-solid-svg-icons";

function App() {
  var name = "Firdaus";

  return (
    <div className="w-screen bg-slate-200">
      <section id="Home">
        <div
          className={`w-screen h-screen pt-20 bg-slate-200 overflow-x-hidden`}
        >
          <ul className="list-none space-y-8 bg-slate-200">
            <li>
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
            </li>
            <li>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-screen h-auto px-10 bg-slate-200">
                <div className="h-auto lg:h-44 px-5 py-5 max-w-6xl bg-blue-500 border-l-4 border-l-blue-800 text-white">
                  <h1 className="text-lg md:text-xl py-2 text-bold font-Poppins">
                    Selamat Datang {name}!
                  </h1>
                  <p className="text-xs md:text-sm">
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
                    className="border-0 h-80 w-96 md:w-100"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="h-auto max-w-7xl bg-white p-6 shadow-md">
                  <ul className="list-none space-y-7">
                    <li className="justify-start">
                      <p className="text-base">
                        Alur Persyaratan Pengajuan Rekomendasi Izin Penelitian
                        di Kabupaten Kebumen
                      </p>
                    </li>
                    <li className="justify-start">
                      <h1 className="text-xl">
                        Alur Persyaratan Pengajuan Rekomendasi Izin Penelitian
                        di Kabupaten Kebumen
                      </h1>
                    </li>
                    <li className="justify-start">
                      <p className="text-sm">
                        Anda berasal dari Perguruan Tinggi / Lembaga / Instansi
                        mana?
                      </p>
                    </li>
                    <li className="justify-start">
                      <h1 className="text-2xl">PROVINSI JAWA TENGAH</h1>
                    </li>
                    <li>
                      <ul className="list-decimal px-5 space-y-3 text-xs">
                        <li>
                          <p>Memenuhi persyaratan seperti:</p>
                          <ol className="list-disc text-xs">
                            <li>Scan KTP.</li>
                            <li>
                              Scan surat pengantar dari perguruan tinggi /
                              lembaga / instansi yang ditujukan kepada Bupati
                              Kebumen Cq. Kepala Kantor Kesbangpol Kabupaten
                              Kebumen.
                            </li>
                            <li>
                              Scan proposal penelitian yang sudah{" "}
                              <strong>DISAHKAN</strong> oleh perguruan tinggi /
                              lembaga / instansi.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <p>Mengunggah persyaratan tersebut kedalam sistem.</p>
                        </li>
                      </ul>
                    </li>
                    <li className="justify-start">
                      <h1 className="text-2xl">LUAR PROVINSI JAWA TENGAH</h1>
                    </li>
                    <li>
                      <ul className="list-decimal px-5 space-y-3 text-xs">
                        <li>
                          Memenuhi persyaratan seperti:
                          <ol className="list-disc text-xs">
                            <li>Scan KTP.</li>
                            <li>
                              Scan surat pengantar dari perguruan tinggi /
                              lembaga / instansi asal yang ditujukan kepada
                              Kantor Kesbangpol Provinsi asal.
                            </li>
                            <li>
                              Scan surat pengantar dari perguruan tinggi /
                              lembaga / instansi yang ditujukan kepada Bupati
                              Kebumen Cq.Kepala Kantor Kesbangpol Kabupaten
                              Kebumen.
                            </li>
                            <li>
                              Proposal penelitian yang sudah{" "}
                              <strong>DISAHKAN</strong> oleh perguruan tinggi /
                              lembaga / instansi.
                            </li>
                          </ol>
                        </li>
                        <li>
                          <h1>
                            Surat pengantar dan persyaratan tersebut diserahkan
                            ke DINAS PENANAMAN MODAL DAN PELAYANAN SATU PINTU
                            PROVINSI JAWA TENGAH atau via online bisa diakses di{" "}
                            <a
                              href="https://dpmptsp.jatengprov.go.id"
                              className="no-underline hover:underline text-blue-500"
                            >
                              https://dpmptsp.jatengprov.go.id
                            </a>{" "}
                            dan nantinya akan mendapatkan SURAT REKOMENDASI dari
                            dinas tersebut.
                          </h1>
                        </li>
                        <li>Mengunggah persyaratan tersebut kedalam sistem.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <Calendar />
              </div>
            </li>
            <li>
              <Footer />
            </li>
          </ul>
        </div>
      </section>
      <Sidebar />
    </div>
  );
}

export default App;
