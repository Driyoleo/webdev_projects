/* eslint-disable no-unused-vars */
import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="text-white flex w-full h-60 items-center justify-center ">
        <div className=" w-1/2 h-32 flex justify-center items-center text-5xl ">
          <h1 className=" font-black ">DWORK</h1>
          {/* <div className="mode"><img src="../images/brightness (1).png" alt="" /></div> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
