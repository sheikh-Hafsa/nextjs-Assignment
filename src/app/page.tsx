"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const route = useRouter();
  const backgroundStyle = {
    backgroundImage:
      'url("https://raw.githubusercontent.com/codesphere-community/nextjs/main/nextjs.webp")',
    backgroundSize: "cover",
    // height:"100vh",
    color: "white",
  };
  return (
    <>
      <div style={backgroundStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            backgroundColor: "black",
            color: "white",
            lineHeight: "65px",
          }}
        >
          <button onClick={() => route.push("/Home")}>Home</button>
          <button onClick={() => route.push("/About")}>About</button>
          <button onClick={() => route.push("/Contact")}>Contact</button>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "30%",
            width: "100%",
            backgroundColor: "black",
            color: "white",
            lineHeight: "25px",
            marginBottom: "50px",
          }}
        >
          <Link href="/Footer">
            <button>Click Here</button>
          </Link>{" "}
        </div>
      </div>
    </>
  );
}

export default page;
