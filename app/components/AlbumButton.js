import styles from "./Components.module.css";

import Image from "next/image";
import Link from "next/link";

export default function TalentButton({
  id,
  url,
  album,
  singer,
  thumbnail,
  setAlbumLink,
}) {
  return (
    <div className={styles.albumButtonContainer}>
      {/* <Link href={`/talent/${id}`}> */}
      <li className={styles.button} onClick={() => setAlbumLink(url)}>
        <Image src={thumbnail} width="175" height="175" alt={album} />
      </li>
      {/* </Link> */}
      <p>{album}</p>
      <p>{singer}</p>
    </div>
  );
}
