import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-screen h-20 grid grid-cols-1 md:grid-cols-2 py-2 items-center bg-white text-black px-4 md:px-10">
        <h2 className="text-xs md:text-base">
          <span className="font-bold">
            Copyright &copy;2014-2016{" "}
            <span className="text-blue-500">Almsaeed Studio.</span>
          </span>{" "}
          All rights reserved.
        </h2>
        <h2 className="text-xs md:text-base">
          <span className="font-bold">Version</span> 2.4.0
        </h2>
      </div>
    </>
  );
}
