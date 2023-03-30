import styles from "./Components.module.css";
import Image from "next/image";

export default function TalentSmall({ name, thumbnail }) {
  return (
    <>
      <li className={styles.button}>
        <Image src={thumbnail} width="50" height="50" />
        <span>{name}</span>
      </li>
    </>
  );
}
