import React from "react";

const Footer = () => {
  const footerTextStyle = {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  };

  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

        // bottom: 0,
        // boxShadow: "0 -4px 2px -4px gray", // Add a subtle shadow
        // padding: "20px 0", // Adjust padding as needed
      }}
    >
      <h1 style={footerTextStyle}>© 2024 - Nika Kotrikadze</h1>
    </footer>
  );
};

export default Footer;
