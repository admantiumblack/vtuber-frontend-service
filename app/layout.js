"use client";

import "./globals.css";
import styles from "./Layout.module.css";

import Image from "next/image";
import { useState } from "react";

import logo from "@/public/logo.png";
import menuIcon from "@/public/hamburger.svg";
import xIcon from "@/public/x.svg";
import CompanyList from "./components/talent/CompanyList";

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
      <head>
        <title>Vtuber Service</title>
      </head>
      <body>
        <div className={styles.topbar}>
          <div className={styles.menuBar}>
            <a href="/">
              <Image src={logo} width={185} height={70} alt={"Logo"} />
            </a>
            <div className={styles.menuIcon} onClick={openNav}>
              <Image src={menuIcon} width={40} height={40} />
            </div>
          </div>
        </div>
        <div
          className={
            styles.sidebar + " " + (sidebarOpen ? styles.sidebarOpen : "")
          }
        >
          <div className={styles.menuBar}>
            <a href="/">
              <Image src={logo} width={185} height={70} alt={"Logo"} />
            </a>
            <div className={styles.menuIcon} onClick={closeNav}>
              <Image src={xIcon} width={40} height={40} />
            </div>
          </div>
          <CompanyList styleContext={"sidebarList"} />
        </div>
        <div className={"main"}>{children}</div>
      </body>
    </html>
  );
}
