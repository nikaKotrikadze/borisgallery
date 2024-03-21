"use client";
import Image from "next/image";

import styles from "./page.module.css";
import Link from "next/link";
import FryingPanSection from "@/components/FryingPanSection";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
      <Hero />
      <FryingPanSection />
    </div>
  );
}
