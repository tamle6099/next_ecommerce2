import React from "react";
import Navbar from "./Navbar";
import Notify from "./Notify";

export default function Layuot({ children }) {
  return (
    <div className="">
      <Navbar />
      <Notify />
      {children}
    </div>
  );
}
