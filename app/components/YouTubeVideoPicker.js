import { useState } from "react";
import YouTubePlayer from "./YouTubePlayer";

export default function YouTubeVideoPicker({ listContext }) {
  const [videoId, setVideoId] = useState("");

  if (listContext == "all") {
  }

  return (
    <>
      <div>
        {videoId ? <YouTubePlayer videoId={videoId} /> : "Loading"}
        <div onClick={() => setVideoId("ZUm3y5JSlNs")}>Change1</div>
      </div>
    </>
  );
}
