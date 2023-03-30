"use client";

import "./globals.css";
import styles from "./Home.module.css";

import Image from "next/image";
import { useState } from "react";

import logo from "@/public/logo.png";
import TalentListSmall from "./components/TalentListSmall";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function openNav() {
    setSidebarOpen(true);
  }

  function closeNav() {
    setSidebarOpen(false);
  }

  return (
    <html lang="en">
      <body>
        <div className={styles.topbar}>
          <div className={styles.topbarLogo} onClick={openNav}>
            <Image src={logo} width="185" height="70" />
          </div>
        </div>
        <div
          className={
            styles.sidebar + " " + (sidebarOpen ? styles.sidebarOpen : "")
          }
        >
          <div className={styles.sidebarLogo} onClick={closeNav}>
            <Image src={logo} width="185" height="70" />
          </div>
          <TalentListSmall />
        </div>
        {children}
      </body>
    </html>
  );
}
