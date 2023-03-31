import { useState } from "react";
import YouTubeIframe from "./YouTubeIframe";

export default function YouTubeStreamPlayer() {
  const [videoId, setVideoId] = useState("kX44Pvmo6u0");

  // useEffect(() => {}, []);

  // function setVideoIdTo(videoId) {
  //   setVideoId(videoId);
  // }

  return (
    <>
      <div>
        <YouTubeIframe video_id={videoId} />
        {/* <div onClick={() => setVideoId("ZUm3y5JSlNs")}>Change1</div> */}
      </div>
    </>
  );
}
