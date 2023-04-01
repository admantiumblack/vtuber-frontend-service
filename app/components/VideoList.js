import useSWR from "swr";

import YouTubeVideoPicker from "./YouTubeVideoPicker";
import Loading from "./loading";
import { useEffect, useState } from "react";

export default function VideoList({ listAll, vtuberId }) {
  // const [albumLink, setAlbumLink] = useState("");
  // const [albumsReady, setAlbumsReady] = useState(false);
  const [videos, setVideos] = useState([]);

  const fetchAllVideos = async () => {
    console.log("Fetching all videos");
    const res = await fetch(`http://localhost:8000/schedule/live`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const fetchVideos = async () => {
    console.log("Fetching talent specific videos");
    const res = await fetch(
      `http://localhost:8000/schedule/live?vtuber_id=${vtuberId}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  };

  const { data: videosRaw, error: videosError } = useSWR(
    "videos",
    // listAll ? fetchAllVideos : fetchVideos,
    fetchAllVideos,
    {
      onSuccess: (data) => {
        setAlbumsReady(true);
        // setAlbumLink(data.data.items[0].external_urls.spotify);
      },
    }
  );

  // const { data: albums, error: albumError } = useSWR("albums", fetchAlbums, {
  //   onSuccess: (data) => {
  //     setAlbumsReady(true);
  //     setAlbumLink(data.data.items[0].external_urls.spotify);
  //   },
  // });

  return (
    <>
      {videos ? (
        <>
          {/* <YouTubeVideoPicker videos={videos} /> */}
          {/* <YouTubeVideoPicker
            videos={[
              "gWT45pBAF-k",
              "ZUm3y5JSlNs",
              "GsczWQa-_v4",
              "ArsPOqflJ-E",
              "KIe916CW3pg",
            ]}
          /> */}
          Test
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
