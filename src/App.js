import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="w-screen">
      <section id="Home"></section>
      {/* <section id=''>

      </section> */}
      <Sidebar />
    </div>
  );
}

export default App;
