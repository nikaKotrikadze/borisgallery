"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const headerStyle = {
    fontSize: 30,
    fontWeight: "700",
    textDecoration: "none",
    color: "black",
  };

  const activeNavListStyle = {
    fontSize: 20,
    fontWeight: "600",
    textDecoration: "none",
    color: "black",
  };

  const disabledNavListStyle = {
    fontSize: 20,
    fontWeight: "600",
    textDecoration: "none",
    color: "gray",
  };

  return (
    <header
      style={{
        // background: "blue",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: 40,
        alignItems: "center",
        // boxShadow: "0 5px 2px -4px black",
      }}
    >
      <Link style={headerStyle} href={"/"}>
        Boris Rakhamimov
      </Link>
      <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
        <Link
          href={"/gallery"}
          style={
            pathname === "/gallery" ? activeNavListStyle : disabledNavListStyle
          }
        >
          Gallery
        </Link>
        <Link
          href={"/biography"}
          style={
            pathname === "/biography"
              ? activeNavListStyle
              : disabledNavListStyle
          }
        >
          Biography
        </Link>
      </div>
    </header>
  );
};

export default Header;
