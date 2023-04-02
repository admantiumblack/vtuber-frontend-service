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
        <div className={styles.videoPlayer}>
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
                      className={styles.button}
                    >
                      <Image
                        src={currentVideo.channel.photo}
                        height={"65"}
                        width={"65"}
                        alt={currentVideo.channel.english_name}
                      />
                    </Link>
                    <h2>
                      <Link
                        href={`https://youtube.com/channel/${currentVideo.channel.id}`}
                        className={styles.textLink}
                      >
                        {currentVideo.channel.english_name}
                      </Link>
                    </h2>
                    <h4>{currentVideo.channel.org}</h4>
                    <h1>
                      <Link
                        href={`https://youtube.com/watch?v=${currentVideo.id}`}
                        className={styles.textLink}
                      >
                        {currentVideo.title}
                      </Link>
                    </h1>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.videoDescriptionLayout}>
                    <h1>
                      <Link
                        href={`https://youtube.com/channel/${currentVideo.id}`}
                        className={styles.textLink}
                      >
                        {currentVideo.snippet.localized.title}
                      </Link>
                    </h1>
                    <h5>
                      {"from " +
                        (currentVideo.liveStreamingDetails
                          ? currentVideo.liveStreamingDetails.scheduledStartTime
                          : currentVideo.snippet.publishedAt
                        ).split("T")[0]}
                    </h5>
                    <div className={styles.descriptionContent}>
                      <p>{currentVideo.snippet.localized.description}</p>
                    </div>
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
              key={video.id}
              className={[
                styles.button,
                currentVideo.id
                  ? currentVideo.id == video.id
                    ? styles.selected
                    : null
                  : null,
              ].join(" ")}
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
                alt={video.title}
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
