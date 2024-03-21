import Image from "next/image";
import React from "react";
import amerindia from "../../public/amerindia.jpg";
const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        alt="amerindia"
        src={amerindia}
        style={{
          width: "90%",
          height: "620px",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Hero;
