import styles from "./Components.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TalentSmall({ id, name, thumbnail }) {
  return (
    <>
      <Link
        href={`/talent/${encodeURIComponent(id.slug)}`}
        // className={[styles.button, styles.talentButtonSidebar].join(" ")}
      >
        <li className={[styles.button, styles.talentButtonSidebar].join(" ")}>
          <Image src={thumbnail} width="50" height="50" alt={name} />
          <p>{name}</p>
        </li>
      </Link>
    </>
  );
}
