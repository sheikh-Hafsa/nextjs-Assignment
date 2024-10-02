import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className="bg-teal-400 pt-8">
      <div>
        <h6 className="text-2xl font-extrabold uppercase mb-6 text-black text-center">
          About Meh!
        </h6>
        <b>Bachelor in Chemistry </b>(FUUAST)
        <p>
          <b>Artificial Intelligence, Web 3.0 & Metaverse:</b>
          <br />
          From Governor House Karachi(Ongoing)
        </p>
        <p>
          <b>Work as Frontend Developer</b>
        </p>
        <p>
          <b>*Skills:</b> HTML, CSS, JAVASCRIPT, TYPESCRIPT, NEXT JS, TAILWAND
          CSS
        </p>
        <Link href="/Contact">
          <button
            className='    className="text-bla font-normal 
            bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-purple-600"'
          >
            go to contact
          </button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default About;
