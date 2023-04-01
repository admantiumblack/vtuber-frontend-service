"use client";

import YouTubeVideoPicker from "./components/YouTubeVideoPicker";
import CompanyList from "./components/CompanyList";

export default function Page() {
  return (
    <>
      <div className={"content"}>
        <h1>Current streams</h1>
        <YouTubeVideoPicker />
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
