import styles from "./Components.module.css";

import { useState } from "react";
import YouTubePlayer from "./YouTubePlayer";
import Image from "next/image";

export default function YouTubeVideoPicker({ videos }) {
  console.log(videos);

  const [currentVideo, setCurrentVideo] = useState(videos.data[0].id);

  return (
    <>
      <div className={styles.videoComponentParent}>
        <div classname={styles.videoPlayer}>
          {currentVideo ? <YouTubePlayer videoId={currentVideo} /> : "Loading"}
        </div>
        <div className={styles.videoDescription}>{currentVideo}</div>
        <div className={styles.videoPicker}>
          {videos.data.map((video) => (
            <div
              className={styles.button}
              onClick={() => setCurrentVideo(video.id)}
            >
              <Image
                key={video.id}
                src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                width={"120"}
                height={"90"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
