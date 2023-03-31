"use client";

import "./globals.css";
import styles from "./Layout.module.css";

import Image from "next/image";
import { useState } from "react";

import logo from "@/public/logo.png";
import CompanyList from "./components/CompanyList";

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
            <Image src={logo} width="185" height="70" alt={"Logo"} />
          </div>
        </div>
        <div
          className={
            styles.sidebar + " " + (sidebarOpen ? styles.sidebarOpen : "")
          }
        >
          <div className={styles.sidebarLogo}>
            <Image
              src={logo}
              width="185"
              height="70"
              alt={"Logo"}
              onClick={closeNav}
            />
          </div>
          <CompanyList styleContext={"sidebarList"} />
        </div>
        <div className={"main"}>{children}</div>
      </body>
    </html>
  );
}
