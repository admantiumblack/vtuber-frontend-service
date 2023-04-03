import styles from "@/app/components/Components.module.css";

import Image from "next/image";

export default function AlbumButton({
  id,
  url,
  album,
  singer,
  thumbnail,
  setAlbumLink,
}) {
  return (
    <div className={styles.albumButtonContainer}>
      <li className={styles.button} onClick={() => setAlbumLink(url)}>
        <Image src={thumbnail} width="175" height="175" alt={album} />
      </li>
      {/* </Link> */}
      <p>{album}</p>
      <p>{singer}</p>
    </div>
  );
}
