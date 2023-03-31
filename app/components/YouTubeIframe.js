import YouTube from "react-youtube";
import Loading from "./loading";
import { useEffect } from "react";

export default function YouTubeIframe({ videoId }) {
  const options = {
    height: "390",
    width: "640",
    // videoId: "kX44Pvmo6u0",
    host: "https://www.youtube-nocookie.com",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      enablejsapi: 1,
      controls: 1,
      rel: 0,
      playsinline: 1,
    },
    events: {
      //   onReady: onPlayerReady,
      //   onStateChange: onPlayerStateChange,
      //   onError: onPlayerError,
    },
  };

  //   useEffect(() => {}, onPlayerReady);

  return (
    <>
      <div>
        {/* <iframe
          width="640"
          height="390"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        /> */}
        <YouTube
          videoId={videoId}
          options={options}
          // onReady={this._onReady}
        />
      </div>
    </>
  );
}
