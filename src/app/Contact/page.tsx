import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      <div>
        <h6 className="text-2xl font-extrabold uppercase mb-6 text-black text-center">
          Contact
        </h6>
        <p>
          <b>Name:</b> Hafsa Shafique
        </p>
        <p>
          <b>Email:</b>{" "}
          <a href="sendtohafsa0345@gmail.com">sendtohafsa0345@gmail.com</a>
        </p>
        <p>
          <b>Phone:</b> 1234-5678900
        </p>
        <p>
          <b>linkedIn:</b>{" "}
          <a
            href="https://www.linkedin.com/in/hafsa-sheikh-9531632b5"
            target="_blank"
          >
            www.linkedIn.com
          </a>
        </p>
        <Link href="/Footer">
          <button
            className='    className="text-bla font-normal 
            bg-gradient-to-r from-red-500 to-pink-500 hover:from-blue-600 hover:to-green-600"'
          >
            Click here
          </button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default Contact;
