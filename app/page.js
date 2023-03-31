"use client";

import YouTubeStreamPlayer from "./components/YouTubeStreamPlayer";

import CompanyList from "./components/CompanyList";
import YouTubeIframe from "./components/YouTubeIframe";

export default function Page() {
  return (
    <>
      <div className={"content"}>
        <h1>Current streams</h1>
        <YouTubeStreamPlayer />
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
