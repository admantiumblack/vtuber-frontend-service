import styles from "./Components.module.css";

import { useState } from "react";
import YouTubePlayer from "./YouTubePlayer";
import Image from "next/image";
import Loading from "./loading";
import Link from "next/link";

export default function YouTubeVideoPicker({ videos, livestreamsOnly }) {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  console.log(videos);
  return (
    <>
      <div className={styles.videoComponentParent}>
        <div classname={styles.videoPlayer}>
          {currentVideo ? (
            <YouTubePlayer videoId={currentVideo.id} />
          ) : (
            <Loading />
          )}
        </div>
        <div className={styles.videoDescription}>
          {currentVideo ? (
            <>
              {livestreamsOnly ? (
                <>
                  <div className={styles.livestreamDescriptionLayout}>
                    <Link
                      href={`https://youtube.com/channel/${currentVideo.channel.id}`}
                    >
                      <Image
                        className={styles.button}
                        src={currentVideo.channel.photo}
                        height={"65"}
                        width={"65"}
                        alt={currentVideo.channel.english_name}
                      />
                    </Link>
                    <h2>{currentVideo.channel.english_name}</h2>
                    <h4>{currentVideo.channel.org}</h4>
                    <h1>{currentVideo.title}</h1>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.videoDescriptionLayout}>
                    <h1>{currentVideo.snippet.localized.title}</h1>
                    <p>{currentVideo.snippet.localized.description}</p>
                  </div>
                </>
              )}
            </>
          ) : (
            <Loading />
          )}
        </div>
        <div className={styles.videoPicker}>
          {videos.map((video) => (
            <div
              className={styles.button}
              onClick={() => setCurrentVideo(video)}
            >
              {(livestreamsOnly
                ? video.status
                : video.snippet.liveBroadcastContent) == "live" ? (
                <div className={styles.liveIndicator}>
                  <p>LIVE</p>
                </div>
              ) : (livestreamsOnly
                  ? video.status
                  : video.snippet.liveBroadcastContent) == "upcoming" ? (
                <div className={styles.upcomingIndicator}>
                  <p>UPCOMING</p>
                </div>
              ) : (
                <></>
              )}
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
