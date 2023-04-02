"use client";

import VideoList from "./components/VideoList";
import CompanyList from "./components/CompanyList";

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
    </>
  );
}
