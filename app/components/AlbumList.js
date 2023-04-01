import styles from "./Components.module.css";

import AlbumButton from "./AlbumButton";
import Loading from "./loading";

export default function AlbumList({ albums }) {
  return (
    <>
      <ul className={styles.discographyAlbumList}>
        {albums ? (
          albums == "Albums data are still empty." ? (
            albums
          ) : albums.data ? (
            albums.data.items.map((item) => (
              <AlbumButton
                key={item.name.toString()}
                id={item.name}
                album={item.name}
                singer={item.artists[0].name}
                thumbnail={item.images[0].url}
              />
            ))
          ) : (
            <Loading />
          )
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
}
