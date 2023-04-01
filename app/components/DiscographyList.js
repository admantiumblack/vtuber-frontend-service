import styles from "./Components.module.css";

import useSWR from "swr";

import AlbumList from "./AlbumList";
import Loading from "./loading";

export default function DiscographyList({ vtuberId }) {
  const fetchAlbums = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DISCOGRAPHY_API}/api/vtubers-albums/${vtuberId}?limit=6&offset=0&include_groups=album,single,compilation,appears_on`
    );
    const data = await res.json();
    // console.log(data)
    return data;
  };

  const { data: albums, error: albumError } = useSWR("albums", fetchAlbums);
  return (
    <>
      <div className={styles.discographyContainer}>
        {albums ? (
          albums == "Albums data are still empty." ? (
            "Album data is empty"
          ) : albums.data ? (
            <>
              <AlbumList albums={albums} />
              <div>Embed goes here</div>
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
