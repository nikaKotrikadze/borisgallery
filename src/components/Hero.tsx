import Image from "next/image";
import React from "react";
import amerindia from "../../public/amerindia.jpg";
const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
      }}
    >
      <Image
        alt="amerindia"
        src={amerindia}
        style={{
          width: "90%",
          height: "550px",
          objectFit: "cover",
        }}
      />

      <h1
        style={{
          fontSize: 12,
          width: 500,
          textAlign: "center",
        }}
      >
        short story about the painting. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fugit eveniet doloremque, odit dolores cupiditate
        natus numquam animi. Quaerat laborum, vero totam tempore voluptate,
        dicta ex excepturi ipsa amet aliquam doloremque.
      </h1>
    </div>
  );
};

export default Hero;
