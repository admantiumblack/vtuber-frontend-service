"use client";

import "./globals.css";
import styles from "./Home.module.css";

import Image from "next/image";
import { Suspense, useState } from "react";
import useSWR from "swr";

import logo from "@/public/logo.png";
import TalentListSmall from "./components/TalentListSmall";

const fetcher = async () => {
  const res = await fetch("http://localhost:8002/user/list");
  const data = await res.json();
  return data;
};

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { talentsData, error } = useSWR("talents", fetcher);

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
          <Suspense fallback={<p>Loading talent list...</p>}>
            <TalentListSmall />
          </Suspense>
        </div>
        {children}
      </body>
    </html>
  );
}
