"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./fryingpan.css";
import borplate1 from "../../public/borplate1.png";
import borplate2 from "../../public/borplate2.png";
import borplate3 from "../../public/borplate3.png";
import borplate4 from "../../public/borplate4.png";

const FryingPanSection = () => {
  const borPlates = [
    { id: 1, src: borplate1, deg: 0 },
    { id: 2, src: borplate2, deg: 8 },
    { id: 3, src: borplate3, deg: 22 },
    { id: 4, src: borplate4, deg: 0 },
  ];
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <h1 style={{ textAlign: "center" }}>Frying Pan Artwork</h1>
      <div
        style={{
          // background: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "98%",
          flexWrap: "wrap",
        }}
      >
        {borPlates.map((image: any) => {
          return (
            <Link
              href={`/gallery/${image.id}`}
              className="fryingpan-shadow-hover"
              style={{
                boxShadow: "0px 0px 5px 0px black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                alt="img"
                src={image.src}
                style={{
                  width: "380px",
                  height: "100%",
                  transform: `rotate(${image.deg}deg)`,
                }}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default FryingPanSection;
