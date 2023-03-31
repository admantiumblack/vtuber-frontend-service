import styles from "./Components.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TalentButton({ id, album, singer, thumbnail }) {
  return (
    <>
      <Link href={`/talent/${id}`}>
        <li className={styles.button}>
          <Image src={thumbnail} width="150" height="150" alt={album} />
          <p>{album}</p>
          <p>{singer}</p>
        </li>
      </Link>
    </>
  );
}