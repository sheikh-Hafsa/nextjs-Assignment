import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        height: "100vh",
      }}
    >
      <div>
        <h6 className="text-2xl font-extrabold uppercase mb-6 text-black text-center">
          Thank you!!
        </h6>{" "}
        <br />
        <Link href="./">
          <button
            className='className="text-bla font-normal 
            bg-gradient-to-r from-red-500 to-blue-500 hover:from-blue-600 hover:to-purple-600"'
          >
            go to Home
          </button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Footer;
