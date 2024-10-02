import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      <div>
        <h6 className="text-2xl font-extrabold uppercase mb-6 text-black text-center">
          {" "}
          Hello World!
        </h6>
        <Link href="/About">
          <button
            className='className="text-bla font-normal 
            bg-gradient-to-r from-red-500 to-pink-500 hover:from-blue-600 hover:to-green-600"'
          >
            go to About
          </button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Home;
