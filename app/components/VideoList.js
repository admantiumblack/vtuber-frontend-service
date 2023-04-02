import useSWR from "swr";

import YouTubeVideoPicker from "./YouTubeVideoPicker";
import Loading from "./loading";
import { useState } from "react";

function prepareLiveVideos(videosRaw) {
  // const videos = videosRaw.data
  //   .sort(
  //     (a, b) => Date.parse(a.start_scheduled) - Date.parse(b.start_scheduled)
  //   )
  //   .slice(0, 5);
  //   return videos;

  return videosRaw.data
    .sort(
      (a, b) => Date.parse(a.start_scheduled) - Date.parse(b.start_scheduled)
    )
    .slice(0, 5);
}

function prepareVideos(videosRaw) {
  // const videos = videosRaw.data.sort(
  //   (a, b) =>
  //     Date.parse(a.liveStreamingDetails.scheduledStartTime) -
  //     Date.parse(b.liveStreamingDetails.scheduledStartTime)
  // );
  // return videos;

  return videosRaw.items.sort(
    (a, b) =>
      // Reversed b and a unlike prepareLiveVideos
      Date.parse(
        b.liveStreamingDetails
          ? b.liveStreamingDetails.scheduledStartTime
          : b.snippet.publishedAt
      ) -
      Date.parse(
        a.liveStreamingDetails
          ? a.liveStreamingDetails.scheduledStartTime
          : a.snippet.publishedAt
      )
  );
}

export default function VideoList({ listAll, vtuberId }) {
  const [videosReady, setVideosReady] = useState(false);
  const [videos, setVideos] = useState([]);

  const fetchAllVideos = async () => {
    console.log("Fetching all videos");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VIDEO_API}/schedule/live`
    );
    const data = await res.json();
    // console.log(data);
    return data;
  };

  const fetchVideos = async () => {
    console.log("Fetching talent specific videos");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_VIDEO_API}/video/list?channel_id=${vtuberId}&limit=5`
    );
    const data = await res.json();
    // console.log(data);
    return data;
  };

  const { data: videosRaw, error: videosError } = useSWR(
    "videos",
    listAll ? fetchAllVideos : fetchVideos,
    {
      onSuccess: (data) => {
        listAll
          ? setVideos(prepareLiveVideos(data))
          : setVideos(prepareVideos(data));
        setVideosReady(true);
      },
    }
  );

  return (
    <>
      {videosReady && videos ? (
        <>
          <YouTubeVideoPicker videos={videos} livestreamsOnly={listAll} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
