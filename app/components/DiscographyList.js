import styles from "./Components.module.css";

import useSWR from "swr";
import { Spotify } from "react-spotify-embed";

import AlbumList from "./AlbumList";
import Loading from "./loading";
import { useEffect, useState } from "react";
import { Router } from "next/router";

export default function DiscographyList({ vtuberId }) {
  const [albumLink, setAlbumLink] = useState("");
  const [albumsReady, setAlbumsReady] = useState(false);

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

  useEffect(() => {
    Router.events.on("routeChangeStart", (url, { shallow }) => {
      setAlbumsReady(false);
      setAlbumLink("");
    });
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
