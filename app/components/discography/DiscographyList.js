import styles from "@/app/components/Components.module.css";

import useSWR from "swr";

import { Spotify } from "react-spotify-embed";
import { useState } from "react";

import AlbumList from "./AlbumList";
import Loading from "../loading";

export default function DiscographyList({ vtuberId }) {
  const [albumsReady, setAlbumsReady] = useState(false);
  const [albumLink, setAlbumLink] = useState("");

  const fetchAlbums = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DISCOGRAPHY_API}/api/vtubers-albums/${vtuberId}?limit=6&offset=0&include_groups=album,single,compilation,appears_on`
    );
    const data = await res.json();
    // console.log(data)
    return data;
  };
  const { data: albums, error: albumError } = useSWR("albums", fetchAlbums, {
    onSuccess: (data) => {
      setAlbumsReady(true);
      // console.log(data.data.items[0].external_urls.spotify);
      setAlbumLink(data.data.items[0].external_urls.spotify);
    },
  });

  return (
    <>
      <div className={styles.discographyContainer}>
        {albumsReady && albums ? (
          albums == "Albums data are still empty." ? (
            <p>Album data is empty</p>
          ) : albums.data ? (
            <>
              <AlbumList albums={albums.data} setAlbumLink={setAlbumLink} />
              {albumLink ? (
                <Spotify link={albumLink} width={"100%"} height={"100%"} />
              ) : (
                <Loading />
              )}
            </>
          ) : (
            <Loading />
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
