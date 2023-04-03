import YouTube from "react-youtube";

export default function YouTubeIframe({ videoId }) {
  const options = {
    host: "https://www.youtube-nocookie.com",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 1,
      enablejsapi: 1,
      playsinline: 1,
      rel: 0,
    },
  };

  return (
    <>
      <div>
        <YouTube
          videoId={videoId}
          options={options}
          // onReady={this._onReady}
        />
      </div>
    </>
  );
}
