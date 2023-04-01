"use client";

import VideoList from "./components/VideoList";
import CompanyList from "./components/CompanyList";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className={"content"}>
        <h1>Current streams</h1>
        <VideoList listAll={true} />
      </div>
      <div className={"content"}>
        <CompanyList styleContext={"landing"} />
      </div>
      <div className={"content"}>
        <h1>Songs</h1>
      </div>
      <div className={"content"}>
        <h1>Artwork</h1>
      </div>
    </>
  );
}
