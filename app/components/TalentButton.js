import styles from "./Components.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TalentButton({ id, name, thumbnail }) {
  return (
    <>
      <Link href={`/talent/${id}`}>
        <li className={styles.button}>
          <Image src={thumbnail} width="150" height="150" alt={name} />
          <p>{name}</p>
        </li>
      </Link>
    </>
  );
}
