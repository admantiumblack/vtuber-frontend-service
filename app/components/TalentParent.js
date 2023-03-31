import styles from "./Components.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TalentParent({ name }) {
  return (
    <>
      <Link
        href={""}
        // className={[styles.button, styles.talentButtonSidebar].join(" ")}
      >
        <li className={[styles.button, styles.talentButtonSidebar].join(" ")}>
          <p>{name}</p>
        </li>
      </Link>
    </>
  );
}

