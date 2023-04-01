import useSWR from "swr";

import YouTubeVideoPicker from "./YouTubeVideoPicker";
import Loading from "./loading";
import { useState } from "react";

function pruneLiveVideos(videosRaw) {
  const videos = videosRaw.data
    .sort(
      (a, b) => Date.parse(a.start_scheduled) - Date.parse(b.start_scheduled)
    )
    .slice(0, 5);
  return videos;
}

export default function VideoList({ listAll, vtuberId }) {
  const [videosReady, setVideosReady] = useState(false);
  const [videos, setVideos] = useState([]);

  const fetchAllVideos = async () => {
    console.log("Fetching all videos");
    const res = await fetch(`http://localhost:8000/schedule/live`);
    const data = await res.json();
    // console.log(data);
    return data;
  };

  const fetchVideos = async () => {
    console.log("Fetching talent specific videos");
    const res = await fetch(
      `http://localhost:8000/video/list?channel_id=${vtuberId}&limit=5`
    );
    const data = await res.json();
    // console.log(data);
    return data;
  };

  const { data: videosRaw, error: videosError } = useSWR(
    "videos",
    listAll ? fetchAllVideos : fetchVideos,
    // fetchAllVideos,
    {
      onSuccess: (data) => {
        listAll ? setVideos(pruneLiveVideos(data)) : setVideos(data.items);
        setVideosReady(true);
        // setAlbumLink(data.data.items[0].external_urls.spotify);
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
