import Image from "next/image";
import styles from "./Components.module.css";

import loadingSpinner from "@/public/spinner.png";

export default function Loading() {
  return (
    <>
      <div className={styles.loadingContainer}>
        <Image
          src={loadingSpinner}
          height={40}
          width={40}
          alt={"loadingSpinner"}
        />
        <p>Loading</p>
      </div>
    </>
  );
}
