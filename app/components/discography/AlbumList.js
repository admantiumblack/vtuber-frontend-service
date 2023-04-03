import styles from "@/app/components/Components.module.css";

import AlbumButton from "./AlbumButton";
import Loading from "../loading";

export default function AlbumList({ albums, setAlbumLink }) {
  return (
    <>
      <ul className={styles.discographyAlbumList}>
        {albums ? (
          albums.items.map((item) => (
            <AlbumButton
              key={item.id.toString()}
              id={item.id}
              url={item.external_urls.spotify}
              album={item.name}
              singer={item.artists[0].name}
              thumbnail={item.images[0].url}
              setAlbumLink={setAlbumLink}
            />
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
}
